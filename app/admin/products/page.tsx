import ProductSearchForm from '@/components/products/ProductSearchForm';
import ProductsPagination from '@/components/products/ProductsPagination';
import ProductsTable from '@/components/products/ProductsTable';
import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma'
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function productCount() {
  const products = await prisma.product.count()
  return products
}

async function getProducts(page: number) {

  const pageSize = 10
  const skip = (page - 1) * pageSize

  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true
    }
  });

  return products
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage({searchParams}: {searchParams: {page: string}}) {

  const page = +searchParams.page || 1
  // const { page } = await searchParams;

  if (page < 0) redirect('/admin/products')

  const productsData = getProducts(page)
  const totalProductsData = productCount();

  const [ products, totalProducts] = await Promise.all([productsData, totalProductsData])
  
  const totalPages = Math.ceil(totalProducts / 10)

  if (page > totalPages) redirect('/admin/products')

  return (
    <>
      <Heading>Administrar productos</Heading>

      <div className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
        <Link
          href={'/admin/products/new'}
          className='bg-sky-400 w-full lg:w-auto text-sm px-6 py-2 text-center font-bold cursor-pointer rounded text-white'
        >Nuevo Producto</Link>

        <ProductSearchForm />
      </div>

      <ProductsTable 
        products={products}
      />

      <ProductsPagination page={page} totalPages={totalPages}/>
    </> 
  )
}
