import Link from "next/link";

interface NavigationItemProps {
    showed: boolean;
    icon: React.ReactNode;
    label: string;
    href: string;
}

export default function NavigationItem({ showed, icon, label, href }: NavigationItemProps) {
    return (
        <Link className="flex w-full items-center px-3 py-3 cursor-pointer hover:bg-green-900"
            href={href}>
            <span className="flex w-11 shrink-0 justify-center">
                {icon}
            </span>

            <p className={`ml-3 overflow-hidden whitespace-nowrap transition-all duration-300 ${showed
                ? "opacity-100"
                : "opacity-0"
                }`}>
                {label}
            </p>
        </Link>
    )
}