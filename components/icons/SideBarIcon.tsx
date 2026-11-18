import { IconProps } from "@/types/icon";

export default function SideBarIcon({ className }: IconProps) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" className={className}>
            <path d="M0 0h16v16H0z" fill="none" />
            <path fill="currentColor" d="M12.5 1A2.5 2.5 0 0 1 15 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5v-9A2.5 2.5 0 0 1 3.5 1zm0 13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2H7v12z" />
        </svg>
    )
}