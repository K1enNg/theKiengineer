"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getProfile } from "@/utils/auth"

export default function useAuth(redirectTo: string = "/auth/signin") {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    let mounted = true
    const check = async () => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
      if (!token) {
        router.replace(redirectTo)
        return
      }
      if (typeof window !== 'undefined') {
        try {
          const cached = localStorage.getItem('author')
          if (cached && mounted) {
            const parsed = JSON.parse(cached)
            setUser((prev: any) => ({ ...prev, ...parsed }))
          }
        } catch {}
      }
      try {
        const profile = await getProfile()
        if (mounted) setUser((prev: any) => ({ ...prev, ...profile }))
      } catch {
        router.replace(redirectTo)
      }
    }
    check()
    return () => { mounted = false }
  }, [router, redirectTo])

  return user
}
