import { IconProps } from "@/types/icon";

export default function MenuIcon({ className }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth={1.5} d="M2.73 8.34h18.54M2.73 15.66h12.24" />
        </svg>
    )
}