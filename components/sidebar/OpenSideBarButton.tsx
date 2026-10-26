import SideBarIcon from "../icons/SideBarIcon";

interface OpenSideBarButtonProps {
    onClick: () => void
}

export default function OpenSideBarButton({ onClick }: OpenSideBarButtonProps) {

    return (
        <button className="cursor-pointer flex w-fit items-center px-3 py-3 hover:bg-green-900"
            onClick={onClick}>
            <span className="flex w-11 justify-center">
                <SideBarIcon className="size-6 " />
            </span>
        </button>
    )
}