import { IconProps } from "@/types/icon";

export default function SpinnerIcon({ className }: IconProps) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 0 1-18 0m0 0a9 9 0 0 1 9-9" />
        </svg>
    )
}