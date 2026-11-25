"use client"

import { createShoppingListFormSchema, CreateShoppingListFormSchema } from "@/schemas/pages/lista-de-compras/createShoppingListFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export default function CreateShoppingListForm() {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateShoppingListFormSchema>({ resolver: zodResolver(createShoppingListFormSchema) })

    async function onSubmit(data: CreateShoppingListFormSchema) {
        console.log(data)
    }

    return (
        <form className="mt-6 flex w-full flex-col gap-4 md:grid md:grid-cols-[1fr_0.2fr_0.1fr_0.2fr] md:items-start md:gap-3 2xl:gap-6"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1">
                <label className="text-base font-semibold text-[#395E52] md:text-sm 2xl:text-md">
                    Nome
                </label>

                <input className="h-12 w-full rounded-lg border border-[#E2D6C4] bg-white px-4 text-base outline-none md:h-10 md:text-sm 2xl:h-14 2xl:text-lg placeholder:text-[#B5A797] focus:border-[#395E52]"
                    placeholder="Nome da Lista..."
                    {...register("name")} />

                {errors.name && (
                    <span className="text-sm text-red-600">{errors.name.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-base font-semibold text-[#395E52] md:text-sm 2xl:text-md">
                    Data de compra limite
                </label>

                <input className="h-12 w-full rounded-lg border border-[#E2D6C4] bg-white px-4 text-base outline-none md:h-10 md:text-sm 2xl:h-14 2xl:text-lg placeholder:text-[#B5A797] focus:border-[#395E52]"
                    placeholder="Ex: 25/11/2026"
                    {...register("buyingDateLimit")} />

                {errors.buyingDateLimit && (
                    <span className="text-sm text-red-600">{errors.buyingDateLimit.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <span className="text-base font-semibold text-[#395E52] md:text-sm 2xl:text-md">
                    Família
                </span>

                <label className="flex h-12 cursor-pointer items-center justify-between gap-2 rounded-lg ">
                    <span className="text-base text-[#6B5A4A] md:text-sm 2xl:text-md">Compartilhar</span>

                    <input className="peer sr-only"
                        type="checkbox"
                        {...register("shareWithFamily")} />

                    <span className="relative h-6 w-11 rounded-full bg-[#E2D6C4] transition-colors after:absolute after:left-0.5 after:top-0.5 after:size-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:bg-[#395E52] peer-checked:after:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-[#395E52] peer-focus-visible:ring-offset-2" />
                </label>
            </div>

            <div className="flex flex-col gap-1">

                <span aria-hidden className="invisible hidden text-base font-semibold md:block md:text-sm 2xl:text-md">.</span>

                <button className="h-12 rounded-lg bg-[#395E52] px-8 text-base cursor-pointer font-bold text-white md:h-10 md:text-sm 2xl:h-14 2xl:text-lg enabled:hover:bg-[#2E4C42] disabled:opacity-60"
                    type="submit"
                    disabled={isSubmitting}>
                    {isSubmitting ? "Criando..." : "Criar"}
                </button>
            </div>
        </form>
    )
}