const getEnvVar = (key: string, defaultValue?: string): string => {
    const value = process.env[key] || defaultValue;

    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }

    return value;
};

const isProductionEnvironment = (): boolean => {
    // Check for Vercel deployment
    if (process.env.VERCEL === '1') {
        return true;
    }
    // Check for production NODE_ENV
    if (process.env.NODE_ENV === 'production') {
        return true;
    }
    // Check for Vercel environment variable
    if (process.env.VERCEL_ENV === 'production') {
        return true;
    }
    return false;
};

const getApiUrl = (): string => {
    const isDevelopment = !isProductionEnvironment();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (isDevelopment) {
        return apiUrl || 'http://localhost:5000';
    }

    if (!apiUrl) {
        console.error('NEXT_PUBLIC_API_URL is missing in production environment');
        throw new Error(
            'NEXT_PUBLIC_API_URL is required in production. ' +
            'Please set it in your Vercel environment variables.'
        );
    }

    // Ensure the URL doesn't contain localhost in production
    if (apiUrl.includes('localhost') || apiUrl.includes('127.0.0.1')) {
        throw new Error(
            'NEXT_PUBLIC_API_URL cannot point to localhost in production. ' +
            `Current value: ${apiUrl}`
        );
    }

    return apiUrl;
};

const env = {
    // API Configuration - Use getApiUrl() to ensure proper environment detection
    apiUrl: getApiUrl(),

    // Environment
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',

    // Node Environment
    nodeEnv: process.env.NODE_ENV || 'development',
} as const;

export default env;
