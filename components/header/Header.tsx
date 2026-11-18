import Logo from "../Logo";
import MenuButton from "./MenuButton";
import NotificationsButton from "./NotificationsButton";
import ProfileButton from "./ProfileButton";

export default function Header() {

    return (
        <header className="relative border-b-2 p-6 md:p-7 grid grid-cols-2 md:grid-cols-1 items-center bg-[#F5EBDD]">
            <div className="md:hidden">
                <MenuButton />
            </div>

            <div className="absolute justify-self-center">
                <Logo className="size-21 md:size-22" />
            </div>

            <div className="flex items-center gap-3 justify-self-end">
                <ProfileButton />
                <NotificationsButton />
            </div>
        </header>
    )
}