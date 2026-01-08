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

// Only use localhost default in development
const getApiUrl = (): string => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment) {
        return getEnvVar('NEXT_PUBLIC_API_URL', 'http://localhost:5000');
    }
    // In production, require the environment variable to be set
    return getEnvVar('NEXT_PUBLIC_API_URL');
};

const env = {
    // API Configuration
    apiUrl: getApiUrl(),

    // Environment
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',

    // Node Environment
    nodeEnv: process.env.NODE_ENV || 'development',
} as const;

export default env;
