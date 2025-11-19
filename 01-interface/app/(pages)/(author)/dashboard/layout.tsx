"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar"
import { useAuth } from "@/hooks/useAuth"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { user, loaded } = useAuth();

  if (!loaded) return null;

  return (
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 p-6 md:p-8">
          {user && (
            <h1 className="text-4xl mt-6 font-bold text-left leading-tight md:ml-70">
              Welcome back, {user.firstName}.
              What's on your mind today?
            </h1>
          )}
          {children}
        </main>
      </SidebarProvider>
  )
}