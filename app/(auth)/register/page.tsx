import type { Metadata } from "next"
import Link from "next/link"
import RegisterForm from "@/components/auth/RegisterForm"

export const metadata: Metadata = {
    title: "Criar conta | Nesty",
}

export default function RegisterPage() {
    return (
        <section className="w-full rounded-2xl bg-[#FBF8F2] p-8 shadow-lg md:w-lg">
            <header className="mb-8 flex flex-col gap-1 items-center">
                <h2 className="text-3xl font-bold text-[#395E52]">
                    Criar conta
                </h2>
                <p className="text-md text-[#6B5A4A]">
                    Comece a organizar as compras da sua família.
                </p>
            </header>

            <RegisterForm />

            <p className="mt-6 text-center text-base text-[#6B5A4A]">
                Já tem uma conta?{" "}
                <Link href="/login" className="font-bold text-[#395E52] hover:underline underline-offset-2">
                    Entrar
                </Link>
            </p>
        </section>
    )
}
