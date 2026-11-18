import BackgroundDecorations from "@/components/auth/BackgroundDecorations";
import Logo from "@/components/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex flex-1 overflow-hidden bg-[#F5EBDD]">
            <BackgroundDecorations />

            <div className="relative z-10 grid flex-1 grid-cols-[2fr_1.7fr] items-center px-42">

                <div className="flex flex-col max-w-xl items-center justify-self-center text-center mb-70">
                    <Logo className="size-35 md:size-67" />

                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold  text-[#395E52] md:text-5xl">
                            Sua lista de compras
                        </h1>

                        <p className="text-3xl font-bold text-[#6B5A4A] md:text-5xl">
                            mais simples em família
                        </p>

                        <span className="mt-2 h-1 w-16 rounded-full bg-[#72957A]" />

                        <p className="text-[#6B5A4A] md:text-lg mt-2">
                            Escaneie suas{" "}
                            <span className="font-semibold text-[#395E52]">notas fiscais</span>{" "}
                            e o Nesty{" "}
                            <span className="font-semibold text-[#395E52]">organiza suas compras</span>{" "}
                            e mostra onde você pode{" "}
                            <span className="font-semibold text-[#395E52]">economizar</span>.
                        </p>
                    </div>
                </div>

                <div className="justify-self-center">
                    {children}
                </div>
            </div>
        </div >
    )
}
