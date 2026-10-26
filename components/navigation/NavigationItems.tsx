import CartIcon from "../icons/CartIcon"
import FamilyIcon from "../icons/FamilyIcon"
import HistoryIcon from "../icons/HistoryIcon"
import HouseIcon from "../icons/HouseIcon"
import PriceTagsIcon from "../icons/PriceTagsIcon"
import NavigationItem from "./NavigationItem"

interface NavigationItemsProps {
    showItems: boolean
}

export default function NavigationItems({ showItems }: NavigationItemsProps) {

    return (
        <ul className="flex flex-col gap-2">
            <li><NavigationItem showed={showItems} icon={<HouseIcon className="size-6" />} label="Visão geral" href="/visao-geral" /></li>
            <li><NavigationItem showed={showItems} icon={<CartIcon className="size-6" />} label="Lista de compras" href="/lista-de-compras" /></li>
            <li><NavigationItem showed={showItems} icon={<HistoryIcon className="size-6" />} label="Histórico" href="/historico" /></li>
            <li><NavigationItem showed={showItems} icon={<PriceTagsIcon className="size-6" />} label="Comparar preços" href="/comparar-precos" /></li>
            <li><NavigationItem showed={showItems} icon={<FamilyIcon className="size-6" />} label="Minha família" href="/minha-familia" /></li>
        </ul>
    )
}