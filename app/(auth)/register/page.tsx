import type { Metadata } from "next"
import Link from "next/link"
import RegisterForm from "@/components/auth/RegisterForm"

export const metadata: Metadata = {
    title: "Criar conta | Nesty",
}

export default function RegisterPage() {
    return (
        <section className="w-full rounded-2xl bg-[#FBF8F2] p-6 shadow-lg md:p-5 2xl:p-8 2xl:w-lg">
            <header className="mb-6 flex flex-col gap-1 items-center text-center md:mb-4 2xl:mb-8">
                <h2 className="text-2xl font-bold text-[#395E52] md:text-xl 2xl:text-3xl">
                    Criar conta
                </h2>
                <p className="text-base text-[#6B5A4A] md:text-sm 2xl:text-base">
                    Comece a organizar as compras da sua família.
                </p>
            </header>

            <RegisterForm />

            <p className="mt-6 text-center text-base text-[#6B5A4A] md:mt-4 md:text-sm 2xl:mt-6 2xl:text-base">
                Já tem uma conta?{" "}
                <Link href="/login" className="font-bold text-[#395E52] hover:underline underline-offset-2">
                    Entrar
                </Link>
            </p>
        </section>
    )
}
