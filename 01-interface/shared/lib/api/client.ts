import axios from "axios";
import env from "@/config/env";
import { ROUTES } from "@/config/routes";

/**
 * Axios instance configured for API requests
 * - Automatic authentication header injection
 * - Centralized error handling
 * - Base URL configuration
 */
const apiClient = axios.create({
    baseURL: env.apiUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

/**
 * Request interceptor - Add authentication token
 */
apiClient.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        // Try to get token from localStorage first, then from cookie
        let token = localStorage.getItem('token');

        // If not in localStorage, try to get from cookie
        if (!token) {
            const match = document.cookie.match(/access_token=([^;]+)/);
            token = match ? match[1] : null;
        }

        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

/**
 * Response interceptor - Handle errors globally
 */
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error?.response?.status;
        const url = error?.config?.url;

        // Only force logout if endpoint is related to auth/profile
        const authEndpoints = [
            "/auth/me",
            "/auth/profile",
            "/auth/refresh"
        ];

        if (status === 401 && authEndpoints.some(e => url?.includes(e))) {
            if (typeof window !== 'undefined') {
                try {
                    localStorage.removeItem('token');
                } catch { }
                window.location.replace(ROUTES.AUTH.SIGNIN);
            }
        }

        // For all other routes, return the error normally
        return Promise.reject(error);
    }
);

export default apiClient;
