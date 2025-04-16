'use client'
import { SearchSchema } from "@/src/schema"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

export default function ProductSearchForm() {
    const router = useRouter()

    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }
        const result = SearchSchema.safeParse(data)
        
        if (!result.success) {
            result.error.issues.forEach( issue => {
                toast.error(issue.message)
            });
            return
        }
        router.push(`/admin/products/search?search=${result.data.search}`)
    }
    return (
        <form 
            action={handleSearchForm}
            className="flex items-center gap-2"
        >
            <input 
                type="text" 
                placeholder="Buscar Producto"
                className="bg-white px-6 py-2 text-sm rounded w-full"
                name="search"
            />
            <input 
                type="submit" 
                value={'Buscar'}
                className="bg-sky-300 px-6 py-2 text-sm font-bold rounded text-white cursor-pointer" 
            />
        </form>
    )
}
