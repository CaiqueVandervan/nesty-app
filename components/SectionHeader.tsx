interface SectionHeaderProps {
    title: string
    subTitle: string
}

export default function SectionHeader({ title, subTitle }: SectionHeaderProps) {
    return (
        <header className="mt-6 flex items-center gap-3">
            <span className="h-12 w-1.5 rounded-full bg-[#72957A] 2xl:h-14" />

            <hgroup>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#395E52] 2xl:text-3xl">
                    {title}
                </h2>
                <p className="text-sm text-[#6B5A4A] 2xl:text-base">
                    {subTitle}
                </p>
            </hgroup>
        </header>
    )
}