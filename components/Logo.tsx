interface LogoProps {
    className: string
}

export default function Logo({ className }: LogoProps) {
    return (
        <div>
            <img src="/nesty-logo.svg" alt="Logo Nesty" className={className} />
        </div>
    )
}