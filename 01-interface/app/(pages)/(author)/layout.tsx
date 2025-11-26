"use client"

import { AuthProvider } from "@/features/auth"

export default function AuthorLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}