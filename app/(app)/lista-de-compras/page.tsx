import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import CartIcon from "@/components/icons/CartIcon";
import CreateShoppingListForm from "@/components/pages/lista-de-compras/CreateShoppingListForm";
import ListOfShoppingList from "@/components/pages/lista-de-compras/ListOfShoppingList";
import { ShoppingList } from "@/types/shoppingList";

export default function ShoppingListPage() {

    const shoppingLists: ShoppingList[] = [
        { id: "1", name: "Mercado do mês", buyingDateLimit: "2026-11-30", shareWithFamily: true },
        { id: "2", name: "Churrasco de sábado", buyingDateLimit: "2026-11-28", shareWithFamily: true },
        { id: "3", name: "Farmácia", buyingDateLimit: "2026-11-26", shareWithFamily: false },
        { id: "4", name: "Hortifruti", buyingDateLimit: "2026-11-27", shareWithFamily: true },
        { id: "5", name: "Material escolar", buyingDateLimit: "2026-12-10", shareWithFamily: false },
        { id: "6", name: "Ceia de Natal", buyingDateLimit: "2026-12-23", shareWithFamily: true },
        { id: "7", name: "Mercado do mês", buyingDateLimit: "2026-11-30", shareWithFamily: true },
        { id: "8", name: "Churrasco de sábado", buyingDateLimit: "2026-11-28", shareWithFamily: true },
        { id: "9", name: "Farmácia", buyingDateLimit: "2026-11-26", shareWithFamily: false },
        { id: "10", name: "Hortifruti", buyingDateLimit: "2026-11-27", shareWithFamily: true },
        { id: "11", name: "Material escolar", buyingDateLimit: "2026-12-10", shareWithFamily: false },
        { id: "12", name: "Ceia de Natal", buyingDateLimit: "2026-12-23", shareWithFamily: true },
        { id: "13", name: "Farmácia", buyingDateLimit: "2026-11-26", shareWithFamily: false },
        { id: "14", name: "Hortifruti", buyingDateLimit: "2026-11-27", shareWithFamily: true },
        { id: "15", name: "Material escolar", buyingDateLimit: "2026-12-10", shareWithFamily: false },
        { id: "16", name: "Ceia de Natal", buyingDateLimit: "2026-12-23", shareWithFamily: true }
    ]

    return (
        <section className="flex flex-1 flex-col p-3 w-full h-full">
            <PageHeader
                title="Lista de compras"
                subTitle="Organize suas compras em família"
                icon={<CartIcon className="size-8 md:size-10" />}
            >
                <div className="flex flex-col rounded-xl bg-white/10 px-4 py-2">
                    <span className="text-2xl font-bold text-white">{shoppingLists.length}</span>
                    <span className="text-xs text-[#E2D6C4]">listas</span>
                </div>

                <div className="flex flex-col rounded-xl bg-white/10 px-4 py-2">
                    <span className="text-2xl font-bold text-white">{shoppingLists.filter((sl) => sl.shareWithFamily).length}</span>
                    <span className="text-xs text-[#E2D6C4]">com a família</span>
                </div>
            </PageHeader>

            <SectionHeader title="Cadastro" subTitle="Crie uma nova lista de compras" />

            <CreateShoppingListForm />

            <SectionHeader title="Listas" subTitle="Gerencie suas listas de compras" />

            <ListOfShoppingList shoppingLists={shoppingLists} />

        </section>
    )
}
