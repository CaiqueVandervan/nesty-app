import BackToHomeButton from "./navigation/BackToHomeButton"

interface PageHeaderProps {
    title: string
    subtitle?: string
    icon?: React.ReactNode
}

export default function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
    return (
        <header className="flex items-start gap-10 rounded-2xl p-4 shadow-md bg-[#F5EBDD]">


            <div className="flex items-center gap-4">
                <span className="flex size-20 items-center justify-center rounded-2xl bg-white text-green-900">
                    {icon}
                </span>

                <hgroup>
                    <h1 className="text-2xl font-bold text-green-900">
                        {title}
                    </h1>

                    <p className="text-sm text-[#6B5A4A]">
                        {subtitle}
                    </p>
                </hgroup>
            </div>
        </header>
    )
}
