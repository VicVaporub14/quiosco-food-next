import { formatCurrency, getImagePath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps ={
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
    const imagePath = getImagePath(product.image)
    return (
        <div className="border border-gray-200 bg-white rounded-lg overflow-hidden shadow-lg">
            <Image
                width={400}
                height={500}
                src={imagePath}
                alt={`Imagen producto ${product.name}`}
            />

            <div className="p-5">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="mt-2 font-black text-xl text-amber-400">{formatCurrency(product.price)}</p>
                <AddProductButton 
                    product={product}
                />
            </div>
        </div>
    )
}
