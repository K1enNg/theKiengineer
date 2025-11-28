"use client";

import { useRouter } from "next/navigation";
import { authService } from "../services/auth.service";
import { ROUTES } from "@/config/routes";

/**
 * Hook for handling user logout
 * @param defaultRedirect - Default route to redirect to after logout (defaults to homepage)
 * @returns Logout function that accepts optional redirect path
 */
export const useLogout = (defaultRedirect: string = ROUTES.HOME) => {
    const router = useRouter();

    return (redirectTo?: string) => {
        authService.logout();
        router.replace(redirectTo ?? defaultRedirect);
    };
};
