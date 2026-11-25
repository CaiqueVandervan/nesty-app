interface PageHeaderProps {
    title: string
    subTitle?: string
    icon?: React.ReactNode
    children?: React.ReactNode
}

export default function PageHeader({ title, subTitle, icon, children }: PageHeaderProps) {
    return (
        <header className="relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-[#395E52] p-4 shadow-md md:flex-row md:items-center md:justify-between md:p-6">

            <span aria-hidden className="pointer-events-none absolute -right-10 -top-16 size-48 rounded-full bg-white/5" />
            <span aria-hidden className="pointer-events-none absolute -bottom-20 right-32 size-40 rounded-full bg-[#72957A]/30" />
            <span aria-hidden className="pointer-events-none absolute bottom-4 right-10 size-6 rounded-full border-2 border-white/10" />

            <div className="relative flex items-center gap-4">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#FBF8F2] text-[#395E52] shadow-sm md:size-20">
                    {icon}
                </span>

                <hgroup className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold text-white md:text-3xl">
                        {title}
                    </h1>

                    <span aria-hidden className="h-1 w-12 rounded-full bg-[#72957A]" />

                    <p className="text-sm text-[#E2D6C4] md:text-base">
                        {subTitle}
                    </p>
                </hgroup>
            </div>

            {children && (
                <div className="relative flex flex-wrap gap-2">
                    {children}
                </div>
            )}
        </header>
    )
}
