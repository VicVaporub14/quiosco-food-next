import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";
import Logo from "../ui/Logo";

async function getAllCategories() {
  return await prisma.category.findMany();
}

export default async function OrderSideBar() {

  const categories = await getAllCategories();

  return (
    <aside className="bg-amber-100 md:w-64 md:h-screen">
      <Logo/>
      <nav className="mt-5">
        {categories.map( category => (
          <CategoryIcon 
            key={category.id} 
            category={category}
          />
        ))}
      </nav>
    </aside>
  )
}
