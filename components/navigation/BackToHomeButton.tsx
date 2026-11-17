import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon"
import Link from "next/link"

export default function BackToHomeButton() {
    return (
        <Link className="group flex items-center gap-2 rounded-xl bg-green-900 px-4 py-2  font-medium text-white shadow-md hover:bg-green-800 transition-all duration-300 hover:shadow-lg"
            href="/"
        >
            <ArrowLeftIcon className="size-3 group-hover:-translate-x-0.5 transition-transform duration-300" />
            Voltar
        </Link>
    )
}