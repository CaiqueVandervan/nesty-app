import MenuLeftIcon from "../icons/MenuLeftIcon";

interface MenuLeftButtonProps {

}

export default function MenuLeftButton({ }: MenuLeftButtonProps) {

    return (
        <button className="cursor-pointer">
            <MenuLeftIcon className="size-6 " />
        </button>
    )
}