import { prisma } from "@/src/lib/prisma"
import ImageUpload from "./ImageUpload"
import { Product } from "@prisma/client"

async function getCategories() {
    return await prisma.category.findMany()
}

type ProductFormProps = {
    product? : Product
}

export default async function ProductForm({product}: ProductFormProps) {

    const categories = await getCategories()

    return (
        <>
            <div>
                <label 
                    htmlFor="name"
                    className='text-slate-800'
                >Nombre:</label>
                <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    className='block w-full p-3 mt-2 bg-slate-100'
                    placeholder='Nombre Producto'
                    defaultValue={product?.name}
                />
            </div>
            <div>
                <label
                    className="text-slate-800"
                    htmlFor="price"
                >Precio:</label>
                <input
                    id="price"
                    name="price"
                    className="block w-full p-3 mt-2 bg-slate-100"
                    placeholder="Precio Producto"
                    defaultValue={product?.price}
                />
            </div>

            <div>
                <label
                    className="text-slate-800"
                    htmlFor="categoryId"
                >Categoría:</label>
                <select
                    className="block w-full p-3 mt-2 bg-slate-100"
                    id="categoryId"
                    name="categoryId"
                    defaultValue={product?.categoryId}
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}
                        >{category.name}</option>
                    ))}
                </select>
            </div>
            <ImageUpload/>
        </>
    )
}
