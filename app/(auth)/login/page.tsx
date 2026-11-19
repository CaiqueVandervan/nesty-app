import type { Metadata } from "next"
import Link from "next/link"
import LoginForm from "@/components/auth/LoginForm"

export const metadata: Metadata = {
    title: "Entrar na conta | Nesty",
}

export default function LoginPage() {

    return (
        <section className="w-full rounded-2xl bg-[#FBF8F2] p-6 shadow-lg md:p-5 2xl:p-8 2xl:w-lg 2xl:mb-20">
            <header className="mb-6 flex flex-col gap-1 items-center text-center md:mb-4 2xl:mb-8">
                <h2 className="text-2xl font-bold text-[#395E52] md:text-xl 2xl:text-3xl">
                    Entrar em sua conta
                </h2>
                <p className="text-base text-[#6B5A4A] md:text-sm 2xl:text-base">
                    Veja como suas compras vão indo.
                </p>
            </header>

            <LoginForm />

            <p className="mt-6 text-center text-base text-[#6B5A4A] md:mt-4 md:text-sm 2xl:mt-6 2xl:text-base">
                Não possui uma conta?{" "}
                <Link href="/register" className="font-bold text-[#395E52] hover:underline underline-offset-2">
                    Criar
                </Link>
            </p>
        </section>
    )
}