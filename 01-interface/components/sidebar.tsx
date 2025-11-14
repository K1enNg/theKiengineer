"use client"
import { Home, Settings, PencilIcon, MessageCircle, BarChart, LogOut } from "lucide-react"

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
import useLogout from "@/hooks/useLogout"
import useAuth from "@/hooks/useAuth"
import { useEffect, useState } from "react"

const fallbackAvatar = "https://imgs.search.brave.com/f9-2ZaPOsVreIjFY28CEGSU6VmSYyzlJdm_wpopWoFU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hbm9u/eW1vdXMtbWFsZS1w/cm9maWxlLWlsbHVz/dHJhdGlvbi1ncmF5/LXRvbmVzLWdlbmVy/aWMtYXZhdGFyLXBs/YWNlaG9sZGVyLW5l/dXRyYWwtZXhwcmVz/c2lvbi1kZXNpZ25l/ZC11c2Utb25saW5l/LTM3NzU2NjIyOC5q/cGc"

const items = [
  {
    title: "Articles",
    url: "/dashboard/postlist",
    icon: Home,
  },
  {
    title: "Comments",
    url: "#",
    icon: MessageCircle,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const logout = useLogout('/homepage');
  const handleLogout = () => logout();
  const profile = useAuth('/auth/signin');
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true) }, []);
  const firstName = mounted ? (profile?.firstName ?? "Author") : "Author";
  const lastName = mounted ? (profile?.lastName ?? "") : "";
  const avatar = mounted ? (profile?.avatar || fallbackAvatar) : fallbackAvatar;
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex h-full flex-col">
          <div className="flex flex-col items-center justify-center p-4">
            <img
              src={avatar}
              alt={`${firstName} ${lastName}`}

              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="mt-2 text-sm font-medium">{firstName} {lastName}</span>
          </div>
          <Button asChild variant="outline" className="self-center flex items-center justify-center gap-2">
            <Link href="/dashboard/compose">
              Write
              <PencilIcon />
            </Link>
          </Button>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
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
            <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}