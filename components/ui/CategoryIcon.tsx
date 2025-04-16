"use client"

import Image from "next/image"
import Link from "next/link"
import { Category } from "@prisma/client"
import { useParams } from "next/navigation"

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({category}: CategoryIconProps) {

    const params = useParams<{category: string}>();

    return (
        <Link
            href={`/order/${category.slug}`}
            className={`${category.slug === params.category ? 'bg-amber-300' : ''} flex items-center gap-4 w-full border-t-4 border-white p-3 last-of-type:border-b-4 hover:bg-amber-200 cursor-pointer`}
        >
            <div className="w-12 h-12 relative">
                <Image
                    fill
                    src={`/icon_${category.slug}.svg`}
                    alt="Imagen Categoria"
                />
                
            </div>
            <p 
                className="text-gray-800 font-bold"
            >{category.name}</p>
        </Link>
    )
}
