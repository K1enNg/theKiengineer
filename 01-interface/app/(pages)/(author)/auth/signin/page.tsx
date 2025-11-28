'use client'

import { SignInForm, authService, type SignInFormData } from "@/features/auth"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/config/routes"
import { useState } from "react"

const SignIn = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (data: SignInFormData) => {
        try {
            setIsLoading(true)
            await authService.login(data)
            router.push(ROUTES.DASHBOARD)
        } catch (error) {
            console.log("Login failed: ", error)
        } finally {
            setIsLoading(false)
        }
    }

    return <SignInForm onSubmit={handleSubmit} isLoading={isLoading} />
}

export default SignIn
