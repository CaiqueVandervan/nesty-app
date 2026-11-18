"use client"

import { loginFormSchema, LoginFormSchema } from "@/schemas/auth/loginFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import EmailIcon from "../icons/EmailIcon"
import PasswordIcon from "../icons/PasswordIcon"
import EnterIcon from "../icons/EnterIcon"
import SpinnerIcon from "../icons/SpinnerIcon"
import GoogleIcon from "../icons/GoogleIcon"

export default function LoginForm() {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormSchema>({ resolver: zodResolver(loginFormSchema) })

    async function onSubmit(data: LoginFormSchema) {
        await new Promise((r) => setTimeout(r, 2000))
        console.log(data)
    }

    return (
        <form className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 text-lg font-semibold text-[#395E52]">
                    <EmailIcon className="size-6" />
                    E-mail
                </label>

                <input placeholder="seuemail@exemplo.com" className="rounded-lg border border-[#E2D6C4] bg-white px-4 py-3 text-lg outline-none placeholder:text-[#B5A797] focus:border-[#395E52]" {...register("email")} />

                {errors.email && (
                    <span className="text-sm text-red-600">{errors.email.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 text-lg font-semibold text-[#395E52]">
                    <PasswordIcon className="size-6" />
                    Senha
                </label>

                <input type="password" placeholder="Digite sua senha" className="rounded-lg border border-[#E2D6C4] bg-white px-4 py-3 text-lg outline-none placeholder:text-[#B5A797] focus:border-[#395E52]" {...register("password")} />

                {errors.password && (
                    <span className="text-sm text-red-600">{errors.password.message}</span>
                )}
            </div>

            <button className="flex gap-2 items-center justify-center mt-2 rounded-lg bg-[#395E52] py-3 text-lg font-bold text-white enabled:hover:bg-[#2E4C42] disabled:opacity-60"
                type="submit"
                disabled={isSubmitting} >
                {isSubmitting ? <SpinnerIcon className="size-6 animate-spin" /> : <EnterIcon className="size-6" />}
                {isSubmitting ? "Entrando..." : "Entrar"}
            </button>

            <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-[#E2D6C4]" />
                <span className="text-sm text-[#6B5A4A]">ou</span>
                <span className="h-px flex-1 bg-[#E2D6C4]" />
            </div>

            <button className="flex gap-2 items-center justify-center rounded-lg border border-[#395E52] py-3 text-lg font-bold text-[#395E52] enabled:hover:bg-[#2E4C42] disabled:opacity-60"
                type="button" >
                <GoogleIcon className="size-6" />
                Entrar com Google
            </button>
        </form>
    )
}
