import BackgroundDecorations from "@/components/auth/BackgroundDecorations";
import Logo from "@/components/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex flex-1 overflow-hidden bg-[#F5EBDD]">
            <BackgroundDecorations />

            <div className="relative z-10 flex flex-1 flex-col items-center gap-6 px-4 py-8 md:grid md:grid-cols-[2fr_1.7fr] md:gap-0 md:px-12 md:py-0 2xl:px-42">

                <div className="flex flex-col max-w-xl items-center justify-self-center text-center md:mb-40 2xl:mb-70">
                    <Logo className="size-24 md:size-44 2xl:size-67" />

                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold  text-[#395E52] md:text-3xl 2xl:text-5xl">
                            Sua lista de compras
                        </h1>

                        <p className="text-2xl font-bold text-[#6B5A4A] md:text-3xl 2xl:text-5xl">
                            mais simples em família
                        </p>

                        <span className="mt-2 h-1 w-16 rounded-full bg-[#72957A]" />

                        <p className="hidden text-[#6B5A4A] md:block 2xl:text-lg mt-2">
                            Escaneie suas{" "}
                            <span className="font-semibold text-[#395E52]">notas fiscais</span>{" "}
                            e o Nesty{" "}
                            <span className="font-semibold text-[#395E52]">organiza suas compras</span>{" "}
                            e mostra onde você pode{" "}
                            <span className="font-semibold text-[#395E52]">economizar</span>.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-md justify-self-center md:max-w-sm 2xl:w-auto 2xl:max-w-none">
                    {children}
                </div>
            </div>
        </div >
    )
}
