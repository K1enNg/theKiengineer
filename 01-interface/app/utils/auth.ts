import api from "./api";

export const register = async (data: any) => {
    const res = await api.post('/auth/register', data);
    return res.data;
}

export const login = async (cred: any) => {
    const res = await api.post('/auth/login', cred);
    const token = res.data.access_token;
    const author = res.data.author;
    if (typeof window != 'undefined') {
        localStorage.setItem('token', token);
        if (author) {
            try {
                localStorage.setItem('author', JSON.stringify(author));
            } catch {}
        }
    }
    return token;
}

export const getProfile = async () => {
    const res = await api.get('/auth/profile');
    return res.data;
}

export const logout = () => {
    if (typeof window !== 'undefined') {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('author');
        } catch (e) {
            throw new Error(e as string);
        }
    }
}