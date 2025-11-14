"use client"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar"
import useAuth from "@/hooks/useAuth"
import { useEffect, useState } from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const profile = useAuth('/auth/signin');
  const user = profile ? { name: profile?.firstName ? `${profile.firstName}` : "" } : null;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true) }, []);

  return (
    <>
      {mounted && user && (
        <h1 className="text-4xl mt-6 font-bold text-left leading-tight md:ml-70">Welcome back, {user.name}. What's on your mind today?</h1>
      )}
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>
      </SidebarProvider>
    </>

  )
}