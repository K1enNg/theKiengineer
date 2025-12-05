/**
 * Centralized route constants for type-safe navigation
 */

export const ROUTES = {
    HOME: '/',
    HOMEPAGE: '/homepage',

    DASHBOARD: '/dashboard',

    ARTICLES: {
        LIST: '/dashboard/postlist',
        VIEW: (slug: string) => `/dashboard/articles/${slug}`,
        EDIT: (slug: string) => `/dashboard/articles/edit/${slug}`,
        CREATE: '/dashboard/articles/create',
    },

    BLOGS: {
        LIST: '/blogs',
        VIEW: (slug: string) => `/blogs/${slug}`,
    },

    ABOUT: '/about',

    AUTH: {
        SIGNIN: '/auth/signin',
        SIGNUP: '/auth/signup',
        SIGNOUT: '/auth/signout',
    },
} as const;

// Type for route paths
export type RoutePath = typeof ROUTES[keyof typeof ROUTES];

/**
 * Route metadata for enhanced navigation
 */
export interface RouteMetadata {
    title: string;
    description?: string;
    requiresAuth?: boolean;
    breadcrumbs?: string[];
}

/**
 * Route metadata configuration
 */
export const ROUTE_METADATA: Record<string, RouteMetadata> = {
    [ROUTES.HOME]: {
        title: 'Home',
        description: 'Welcome to TheKiengineer',
        requiresAuth: false,
    },
    [ROUTES.DASHBOARD]: {
        title: 'Dashboard',
        description: 'Your personal dashboard',
        requiresAuth: true,
        breadcrumbs: ['Dashboard'],
    },
    [ROUTES.ARTICLES.LIST]: {
        title: 'Articles',
        description: 'Manage your articles',
        requiresAuth: true,
        breadcrumbs: ['Dashboard', 'Articles'],
    },
    [ROUTES.ARTICLES.CREATE]: {
        title: 'Create Article',
        description: 'Write a new article',
        requiresAuth: true,
        breadcrumbs: ['Dashboard', 'Articles', 'Create'],
    },
    [ROUTES.AUTH.SIGNIN]: {
        title: 'Sign In',
        description: 'Sign in to your account',
        requiresAuth: false,
    },
    [ROUTES.HOMEPAGE]: {
        title: 'Home',
        description: 'Welcome to TheKiengineer',
        requiresAuth: false,
    },
    [ROUTES.ABOUT]: {
        title: 'About',
        description: 'Learn more about TheKiengineer',
        requiresAuth: false,
    },
    [ROUTES.BLOGS.LIST]: {
        title: 'Blogs',
        description: 'Read our latest articles',
        requiresAuth: false,
    },
};

/**
 * Get metadata for a route
 */
export const getRouteMetadata = (path: string): RouteMetadata | undefined => {
    return ROUTE_METADATA[path];
};
