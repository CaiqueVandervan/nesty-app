import NotificationsIcon from "../icons/NotificationsIcon";

interface NotificationsButtonProps {

}

export default function NotificationsButton({ }: NotificationsButtonProps) {

    return (
        <button className="cursor-pointer">
            <NotificationsIcon className="size-6" />
        </button>
    )
}