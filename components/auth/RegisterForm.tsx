"use client"

import { registerFormSchema, RegisterFormSchema } from "@/schemas/auth/registerFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import EmailIcon from "../icons/EmailIcon"
import PasswordIcon from "../icons/PasswordIcon"
import EnterIcon from "../icons/EnterIcon"
import SpinnerIcon from "../icons/SpinnerIcon"
import GoogleIcon from "../icons/GoogleIcon"
import PersonIcon from "../icons/PersonIcon"
import PasswordConfirmIcon from "../icons/PasswordConfirmIcon"

export default function RegisterForm() {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormSchema>({ resolver: zodResolver(registerFormSchema) })

    async function onSubmit(data: RegisterFormSchema) {
        await new Promise((r) => setTimeout(r, 2000))
        console.log(data)
    }

    return (
        <form className="flex flex-col gap-4 md:gap-3 2xl:gap-4"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 text-base font-semibold text-[#395E52] md:text-sm 2xl:text-lg">
                    <PersonIcon className="size-5 md:size-4 2xl:size-6" />
                    Nome completo
                </label>

                <input placeholder="Digite seu nome completo" className="rounded-lg border border-[#E2D6C4] bg-white px-4 py-3 text-base outline-none md:py-2 md:text-sm 2xl:py-3 2xl:text-lg placeholder:text-[#B5A797] focus:border-[#395E52]" {...register("name")} />

                {errors.name && (
                    <span className="text-sm text-red-600">{errors.name.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 text-base font-semibold text-[#395E52] md:text-sm 2xl:text-lg">
                    <EmailIcon className="size-5 md:size-4 2xl:size-6" />
                    E-mail
                </label>

                <input placeholder="seuemail@exemplo.com" className="rounded-lg border border-[#E2D6C4] bg-white px-4 py-3 text-base outline-none md:py-2 md:text-sm 2xl:py-3 2xl:text-lg placeholder:text-[#B5A797] focus:border-[#395E52]" {...register("email")} />

                {errors.email && (
                    <span className="text-sm text-red-600">{errors.email.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 text-base font-semibold text-[#395E52] md:text-sm 2xl:text-lg">
                    <PasswordIcon className="size-5 md:size-4 2xl:size-6" />
                    Senha
                </label>

                <input type="password" placeholder="Mínimo de 8 caracteres" className="rounded-lg border border-[#E2D6C4] bg-white px-4 py-3 text-base outline-none md:py-2 md:text-sm 2xl:py-3 2xl:text-lg placeholder:text-[#B5A797] focus:border-[#395E52]" {...register("password")} />

                {errors.password && (
                    <span className="text-sm text-red-600">{errors.password.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 text-base font-semibold text-[#395E52] md:text-sm 2xl:text-lg">
                    <PasswordConfirmIcon className="size-5 md:size-4 2xl:size-6" />
                    Confirme a senha
                </label>

                <input type="password" placeholder="Digite a senha novamente" className="rounded-lg border border-[#E2D6C4] bg-white px-4 py-3 text-base outline-none md:py-2 md:text-sm 2xl:py-3 2xl:text-lg placeholder:text-[#B5A797] focus:border-[#395E52]" {...register("confirmPassword")} />

                {errors.confirmPassword && (
                    <span className="text-sm text-red-600">{errors.confirmPassword.message}</span>
                )}
            </div>

            <button className="flex gap-2 items-center justify-center mt-2 rounded-lg bg-[#395E52] py-3 text-base font-bold md:py-2 md:text-sm 2xl:py-3 2xl:text-lg text-white enabled:hover:bg-[#2E4C42] disabled:opacity-60"
                type="submit"
                disabled={isSubmitting} >
                {isSubmitting ? <SpinnerIcon className="size-5 animate-spin md:size-4 2xl:size-6" /> : <EnterIcon className="size-5 md:size-4 2xl:size-6" />}
                {isSubmitting ? "Entrando..." : "Entrar"}
            </button>

            <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-[#E2D6C4]" />
                <span className="text-sm text-[#6B5A4A]">ou</span>
                <span className="h-px flex-1 bg-[#E2D6C4]" />
            </div>

            <button className="flex gap-2 items-center justify-center rounded-lg border border-[#395E52] py-3 text-base font-bold md:py-2 md:text-sm 2xl:py-3 2xl:text-lg text-[#395E52] enabled:hover:bg-[#2E4C42] disabled:opacity-60"
                type="button" >
                <GoogleIcon className="size-5 md:size-4 2xl:size-6" />
                Entrar com Google
            </button>
        </form>
    )
}
