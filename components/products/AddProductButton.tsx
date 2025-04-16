"use client"

import { useStore } from "@/src/store";
import { Product } from "@prisma/client";

type AddProductButtonProps = {
    product: Product
}

export default function AddProductButton({product}: AddProductButtonProps) {

    const AddToOrder = useStore(state => state.addToOrder)

    return (
        <button
            type="button"
            className="bg-amber-300 hover:bg-amber-400 transition-colors text-white w-full mt-3 py-2 font-bold cursor-pointer rounded-lg"
            onClick={() => AddToOrder(product)}
        >Agregar</button>
    );
}
