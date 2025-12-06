/**
 * Shared constants for the application
 */

export const APP_CONSTANTS = {
    NAME: 'TheKiengineer',
    VERSION: '1.0.0',
    DESCRIPTION: 'A modern blogging platform',
} as const;

export const VALIDATION_CONSTANTS = {
    ARTICLE: {
        TITLE_MIN_LENGTH: 1,
        TITLE_MAX_LENGTH: 200,
        CONTENT_MIN_LENGTH: 10,
        CONTENT_MAX_LENGTH: 50000,
        TAG_MAX_COUNT: 10,
    },
    AUTH: {
        PASSWORD_MIN_LENGTH: 8,
        PASSWORD_MAX_LENGTH: 128,
        EMAIL_MAX_LENGTH: 255,
    },
} as const;

export const UI_CONSTANTS = {
    BREAKPOINTS: {
        SM: 640,
        MD: 768,
        LG: 1024,
        XL: 1280,
        '2XL': 1536,
    },
    ANIMATION: {
        DURATION_FAST: 150,
        DURATION_NORMAL: 300,
        DURATION_SLOW: 500,
    },
    PAGINATION: {
        DEFAULT_PAGE_SIZE: 10,
        PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
    },
} as const;

export const AUTHOR_CONSTANTS = {
    NAME: 'Kien Nguyen',
    PROFILE_PICTURE: '/pfp.jpg',
    BIO: 'I like building stuffs',
    TITLE: 'Web Developer/Computer Engineering major',
} as const;
