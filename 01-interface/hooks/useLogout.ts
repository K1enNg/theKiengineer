"use client"
import { useRouter } from "next/navigation"
import { logout } from "@/utils/auth"

export default function useLogout(defaultRedirect: string = "/homepage") {
  const router = useRouter()
  return (redirectTo?: string) => {
    logout()
    router.replace(redirectTo ?? defaultRedirect)
  }
}
