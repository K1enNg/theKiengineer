import apiClient from "@/shared/lib/api/client";
import type { Author } from "@/shared/types/common.types";

/**
 * Authentication credentials
 */
export interface LoginCredentials {
    email: string;
    password: string;
}

/**
 * Login response from the API
 */
export interface LoginResponse {
    access_token: string;
    author: Author;
}

/**
 * Authentication service - handles all auth-related API calls
 */
export const authService = {
    /**
     * Login with email and password
     */
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
        const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
        const { access_token, author } = response.data;

        if (typeof window !== 'undefined') {
            // Store in cookie for middleware
            document.cookie = `access_token=${access_token}; path=/;`;

            // Also store in localStorage for API interceptor
            localStorage.setItem('token', access_token);

            if (author) {
                localStorage.setItem('author', JSON.stringify(author));
            }
        }

        return { access_token, author };
    },

    /**
     * Logout - clear all auth data
     */
    logout: (): void => {
        if (typeof window !== "undefined") {
            document.cookie = "access_token=; Max-Age=0; path=/;";
            localStorage.removeItem("token");
            localStorage.removeItem("author");
        }
    },

    /**
     * Get current user profile
     */
    getProfile: async (): Promise<Author> => {
        const token = typeof window !== 'undefined'
            ? document.cookie
                .split('; ')
                .find(row => row.startsWith('access_token='))
                ?.split('=')[1]
            : null;

        if (!token) {
            throw new Error("No authentication token found");
        }

        const response = await apiClient.get<Author>('/auth/profile', {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response.data;
    },
};
