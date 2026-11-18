import z from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório").max(50, "O nome deve ter no máximo 50 caracteres"),
    email: z.string().trim().min(1, "O e-mail é obrigatório").max(50, "O e-mail deve ter no máximo 50 caracteres").email("E-mail inválido"),
    password: z.string().trim().min(8, "A senha deve ter no mínimo 8 caracteres").max(72, "A senha deve ter no mánimo 72 caracteres").regex(/[a-zA-Z]/, "A senha deve conter pelo menos uma letra").regex(/[0-9]/, "A senha deve conter pelo menos um número"),
    confirmPassword: z.string().min(1, "Confirme sua senha")
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"]
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>