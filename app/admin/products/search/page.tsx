import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function searchProducts(searchTerm: string) {
    
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function SearchPage({searchParams}: {searchParams: {search: string}}) {
    
    const {search} = await searchParams
    console.log(search)
    const products =  await searchProducts(search)

    return (
        <>
            <Heading>Resultados de Busqueda: {search}</Heading>
            <div className='flex flex-col gap-4 lg:flex-row lg:justify-end'>
                <ProductSearchForm />
            </div>
            {products.length ? (
                <ProductsTable products={products} />
            ): <p className="text-center mt-10">No hay resultados</p>}
        </>
    )
}