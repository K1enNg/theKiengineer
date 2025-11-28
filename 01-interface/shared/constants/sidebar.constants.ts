import { Home, Settings, MessageCircle, BarChart, type LucideIcon } from "lucide-react"

/**
 * Sidebar navigation item type
 */
export interface SidebarNavItem {
    title: string
    url: string
    icon: LucideIcon
}

/**
 * Main navigation items for the sidebar
 */
export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
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
] as const

/**
 * Fallback avatar URL for users without a profile picture
 */
export const FALLBACK_AVATAR_URL = "https://imgs.search.brave.com/f9-2ZaPOsVreIjFY28CEGSU6VmSYyzlJdm_wpopWoFU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hbm9u/eW1vdXMtbWFsZS1w/cm9maWxlLWlsbHVz/dHJhdGlvbi1ncmF5/LXRvbmVzLWdlbmVy/aWMtYXZhdGFyLXBs/YWNlaG9sZGVyLW5l/dXRyYWwtZXhwcmVz/c2lvbi1kZXNpZ25l/ZC11c2Utb25saW5l/LTM3NzU2NjIyOC5q/cGc"
