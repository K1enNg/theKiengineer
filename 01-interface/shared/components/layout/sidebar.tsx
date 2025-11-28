"use client"
import { PencilIcon, LogOut } from "lucide-react"

import { useAuth, useLogout } from "@/features/auth"
import { SIDEBAR_NAV_ITEMS, FALLBACK_AVATAR_URL } from "@/shared/constants/sidebar.constants"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AppSidebar() {
  const logout = useLogout('/homepage');

  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const avatar = user.avatar || FALLBACK_AVATAR_URL;

  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex h-full flex-col">
          <div className="flex flex-col items-center justify-center p-4">
            <img
              src={avatar}
              alt={`${user.firstName} ${user.lastName}`}

              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="mt-2 text-sm font-medium">{user.firstName} {user.lastName}</span>
          </div>
          <Button asChild variant="outline" className="self-center flex items-center justify-center gap-2">
            <Link href="/dashboard/articles/create">
              Write
              <PencilIcon />
            </Link>
          </Button>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {SIDEBAR_NAV_ITEMS.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <div className="mt-auto p-4">
            <Button variant="ghost" className="w-full justify-start" onClick={() => logout()}>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}