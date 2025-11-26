/**
 * Centralized environment configuration with validation
 * 
 * Usage:
 * import env from '@/config/env';
 * const apiUrl = env.apiUrl;
 */

const getEnvVar = (key: string, defaultValue?: string): string => {
    const value = process.env[key] || defaultValue;

    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }

    return value;
};

const env = {
    // API Configuration
    apiUrl: getEnvVar('NEXT_PUBLIC_API_URL'),

    // Environment
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',

    // Node Environment
    nodeEnv: process.env.NODE_ENV || 'development',
} as const;

export default env;
