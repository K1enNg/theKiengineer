import { Home, Settings, PencilIcon } from "lucide-react"

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

const author = {
  name: "John Doe",
  avatar: "https://imgs.search.brave.com/47pR8CI7w3lgajXcH8nWAYgg1mUoZKs7Qw7435zLpx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXN0/bHktczMuYWxsbXVz/aWMuY29tL2FydGlz/dC9tbjAwMDAxODM0/MzAvNDAwLzVwNUtk/OUstTTZnbjJvS1lp/QTNXVGo2S3NNdHRM/bHlCbW1WVFo2X0NM/czA9LmpwZw",
}

const items = [
  {
    title: "Home",
    url: "/dashboard/postlist",
    icon: Home,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
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
      </SidebarContent>
    </Sidebar>
  )
}