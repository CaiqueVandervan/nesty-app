import Link from "next/link"
import FamilyIcon from "@/components/icons/FamilyIcon"
import { ShoppingList } from "@/types/shoppingList"

interface ListOfShoppingListProps {
    shoppingLists: ShoppingList[]
}

function formatDate(isoDate: string) {
    const [year, month, day] = isoDate.split("-")
    return `${day}/${month}/${year}`
}

export default function ListOfShoppingList({ shoppingLists }: ListOfShoppingListProps) {

    if (shoppingLists.length === 0) {
        return (
            <p className="mt-6 text-center text-sm text-[#6B5A4A]">
                Nenhuma lista ainda. Crie a primeira acima.
            </p>
        )
    }

    return (
        <section className="mt-6 flex flex-col flex-1 gap-3 md:overflow-y-auto md:pr-2">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {shoppingLists.map((sl) => (
                    <li key={sl.id}>

                        <Link href={`/lista-de-compras/${sl.id}`}
                            className="flex h-full flex-col gap-3 rounded-xl border border-[#E2D6C4] bg-white p-4 transition-colors hover:border-[#395E52]">

                            <div className="flex items-start justify-between gap-2">
                                <h3 className="font-bold text-[#395E52] 2xl:text-lg">{sl.name}</h3>

                                {sl.shareWithFamily && (
                                    <span title="Compartilhada com a família"
                                        className="flex shrink-0 items-center gap-1 rounded-full bg-[#395E52]/10 px-2 py-0.5 text-xs font-semibold text-[#395E52]">
                                        <FamilyIcon className="size-3.5" />
                                        Família
                                    </span>
                                )}
                            </div>

                            <p className="text-sm text-[#6B5A4A]">
                                Comprar até <span className="font-semibold">{formatDate(sl.buyingDateLimit)}</span>
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
