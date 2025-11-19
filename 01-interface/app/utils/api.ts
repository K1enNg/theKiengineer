import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || process.env.PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use((config) => {
    if (typeof window != 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers = config.headers ?? {};
            (config.headers as any).Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error?.response?.status;
        if (status === 401) {
            if (typeof window !== 'undefined') {
                try { localStorage.removeItem('token'); } catch { /* noop */ }
                window.location.replace('/auth/signin');
            }
        }
        return Promise.reject(error);
    }
);

export default api;