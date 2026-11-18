import z from "zod"

export const loginFormSchema = z.object({
    email: z.string().trim().min(1, "O e-mail é obrigatório").max(50, "O e-mail deve ter no máximo 50 caracteres").email("E-mail inválido"),
    password: z.string().trim().min(1, "A senha é obrigatória")
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>