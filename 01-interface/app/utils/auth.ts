import api from "./api";

export const register = async (data: any) => {
    const res = await api.post('/auth/register', data);
    return res.data;
}

export const login = async (cred: any) => {
    const res = await api.post('/auth/login', cred);
    const token = res.data.access_token;
    if (typeof window != 'undefined') {
        localStorage.setItem('token', token);
    }
    return token;
}

export const getProfile = async () => {
    const res = await api.get('/auth/profile');
    return res.data;
}