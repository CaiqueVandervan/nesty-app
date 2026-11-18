import PageHeader from "@/components/PageHeader";
import CartIcon from "@/components/icons/CartIcon";

export default function ShoppingListPage() {
    return (
        <section className="p-3 w-full h-full">
            <PageHeader
                title="Lista de compras"
                subtitle="Organize suas compras em família"
                icon={<CartIcon className="size-8" />}
            />
        </section>
    )
}