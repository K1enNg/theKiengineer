/**
 * Centralized route constants for type-safe navigation
 */

export const ROUTES = {
    HOME: '/',

    DASHBOARD: '/dashboard',

    ARTICLES: {
        LIST: '/dashboard/articles',
        VIEW: (slug: string) => `/dashboard/articles/${slug}`,
        EDIT: (slug: string) => `/dashboard/articles/edit/${slug}`,
        CREATE: '/dashboard/articles/create',
    },

    AUTH: {
        SIGNIN: '/auth/signin',
        SIGNUP: '/auth/signup',
        SIGNOUT: '/auth/signout',
    },
} as const;

// Type for route paths
export type RoutePath = typeof ROUTES[keyof typeof ROUTES];
