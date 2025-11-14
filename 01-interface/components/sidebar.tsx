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

const author = {
  name: "John Doe",
  avatar: "https://imgs.search.brave.com/47pR8CI7w3lgajXcH8nWAYgg1mUoZKs7Qw7435zLpx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXN0/bHktczMuYWxsbXVz/aWMuY29tL2FydGlz/dC9tbjAwMDAxODM0/MzAvNDAwLzVwNUtk/OUstTTZnbjJvS1lp/QTNXVGo2S3NNdHRM/bHlCbW1WVFo2X0NM/czA9LmpwZw",
}

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
  const doLogout = useLogout('/homepage');
  const handleLogout = () => doLogout();
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex h-full flex-col">
          <div className="flex flex-col items-center justify-center p-4">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="mt-2 text-sm font-medium">{author.name}</span>
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