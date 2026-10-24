import Logo from "../Logo";
import MenuLeftButton from "./MenuLeftButton";
import NotificationsButton from "./NotificationsButton";
import ProfileButton from "./ProfileButton";

interface HeaderProps {

}

export default function Header({ }: HeaderProps) {

    return (
        <header className="relative border-b-2 p-6 md:p-8 grid grid-cols-2 items-center bg-[#F5EBDD]">
            <MenuLeftButton />

            <div className="absolute justify-self-center self-center">
                <Logo className="size-35" />
            </div>

            <div className="flex items-center gap-3 justify-self-end">
                <ProfileButton />
                <NotificationsButton />
            </div>
        </header>
    )
}