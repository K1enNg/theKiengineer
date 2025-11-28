import { z } from "zod"

/**
 * Validation schema for sign-in form
 */
export const signInSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is required'),
})

export type SignInFormData = z.infer<typeof signInSchema>
