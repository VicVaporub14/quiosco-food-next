"use client"

import { useRouter } from "next/navigation"

export default function GoBackButton() {

    const router = useRouter()
    return (
        <button
            onClick={() => router.back()}
            className='bg-amber-400 text-white px-8 py-2 text-md text-center font-bold cursor-pointer w-full lg:w-auto rounded-lg'
        >Volver</button>
    )
}
