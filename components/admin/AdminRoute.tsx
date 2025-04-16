"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminRouteProps = {
    link: {
        url: string;
        text: string;
        blank: boolean;
    }
}

export default function AdminRoute({link}: AdminRouteProps) {

    const pathname = usePathname();
    const isActive = pathname.startsWith(link.url)

    return (
        <Link
            className={`${isActive ? 'bg-blue-300': ''} font-bold text-md border-t-4 border-white p-5 last-of-type:border-b-4 hover:bg-blue-200`}
            href={link.url}
            target={link.blank ? '_blank': ''}
        >{link.text}</Link>
    )
}
