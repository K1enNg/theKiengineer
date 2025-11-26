import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// api.interceptors.request.use((config) => {
//     if (typeof window != 'undefined') {
//         const token = localStorage.getItem('token');
//         console.log("TOKEN FOUND IN LOCALSTORAGE:", token);
        
//         if (token) {
//             config.headers = config.headers ?? {};
//             config.headers.Authorization = `Bearer ${token}`;
//             console.log("AUTH HEADER SET:", config.headers.Authorization);
//         } else {
//             console.log("NO TOKEN FOUND.");
//         }
//     }
//     return config;
// });

api.interceptors.request.use((config) => {
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


api.interceptors.response.use(
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
        try { localStorage.removeItem('token'); } catch {}
        window.location.replace('/auth/signin');
      }
    }

    // For all other routes, return the error normally
    return Promise.reject(error);
  }
);


export default api;