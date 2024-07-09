import {z} from "zod";

export const signUpZodType = z.object({
    email: z.string().email("Email not valid !"),
    password: z.string().min(6, "password must be at least 6 char !"),
    name: z.string().max(30, "name must be 30 char or less !").optional()
})
export type signUpType = z.infer<typeof signUpZodType>

export const signInZodType = z.object({
    email: z.string().email("Email not valid !"),
    password: z.string().min(6, "password must be at least 6 char !")
})
export type signInType = z.infer<typeof signInZodType>

export const createBlogInp = z.object({
    title: z.string(),
    content: z.string()
})

export type createBlogType = z.infer<typeof createBlogInp>

export const updateBlogInp = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string(),
    publish: z.boolean().default(false)
})

export type updateBlogType = z.infer<typeof updateBlogInp>
