import z from "zod"

export const createShoppingListFormSchema = z.object({
    name: z.string().trim().min(1, "O nome é obrigatório").max(50, "O nome deve ter no máxio 50 caracteres"),
    buyingDateLimit: z.iso.date(),
    shareWithFamily: z.boolean()
})

export type CreateShoppingListFormSchema = z.infer<typeof createShoppingListFormSchema>