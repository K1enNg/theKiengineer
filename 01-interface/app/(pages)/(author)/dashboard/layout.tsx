"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/shared/components/layout/sidebar"
import { useAuth } from "@/features/auth"

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
          <h1 className="text-4xl mt-6 font-bold text-left leading-tight mb-6">
            Welcome back, {user.firstName}.
            What's on your mind today?
          </h1>
        )}
        {children}
      </main>
    </SidebarProvider>
  )
}