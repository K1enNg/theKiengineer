import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const author = {
  name: "John Doe",
  avatar: "https://imgs.search.brave.com/47pR8CI7w3lgajXcH8nWAYgg1mUoZKs7Qw7435zLpx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXN0/bHktczMuYWxsbXVz/aWMuY29tL2FydGlz/dC9tbjAwMDAxODM0/MzAvNDAwLzVwNUtk/OUstTTZnbjJvS1lp/QTNXVGo2S3NNdHRM/bHlCbW1WVFo2X0NM/czA9LmpwZw",
}

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
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
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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