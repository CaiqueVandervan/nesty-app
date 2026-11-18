import type { Metadata } from "next"
import Link from "next/link"
import LoginForm from "@/components/auth/LoginForm"

export const metadata: Metadata = {
    title: "Entrar na conta | Nesty",
}

export default function LoginPage() {

    return (
        <section className="w-full rounded-2xl bg-[#FBF8F2] p-8 shadow-lg md:w-lg mb-20">
            <header className="mb-8 flex flex-col gap-1 items-center">
                <h2 className="text-3xl font-bold text-[#395E52]">
                    Entrar em sua conta
                </h2>
                <p className="text-md text-[#6B5A4A]">
                    Veja como suas compras vão indo.
                </p>
            </header>

            <LoginForm />

            <p className="mt-6 text-center text-base text-[#6B5A4A]">
                Não possui uma conta?{" "}
                <Link href="/register" className="font-bold text-[#395E52] hover:underline underline-offset-2">
                    Criar
                </Link>
            </p>
        </section>
    )
}