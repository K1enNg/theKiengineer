import api from "./api"

// export const login = async (cred: { email: string; password: string }) => {
//   const res = await api.post('/auth/login', cred);
//   const { access_token, author } = res.data;

//   if (typeof window !== 'undefined') {
//     // Cookie for middleware detection
//     document.cookie = `access_token=${access_token}; path=/;`;
//     // localStorage for UI access
//     if (author) {
//       localStorage.setItem('author', JSON.stringify(author));
//     }
//   }

//   return { access_token, author };
// };

// In auth.ts
export const login = async (cred: { email: string; password: string }) => {
  const res = await api.post('/auth/login', cred);
  const { access_token, author } = res.data;

  if (typeof window !== 'undefined') {
    // Store in cookie for middleware
    document.cookie = `access_token=${access_token}; path=/;`;
    
    // Also store in localStorage for API interceptor
    localStorage.setItem('token', access_token);
    
    if (author) {
      localStorage.setItem('author', JSON.stringify(author));
    }
  }

  return { access_token, author };
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    document.cookie = 'access_token=; path=/;';
    localStorage.removeItem('author');
  }
};

export const getProfile = async () => {
  const token = typeof window !== 'undefined' ? document.cookie
    .split('; ')
    .find(row => row.startsWith('access_token='))
    ?.split('=')[1] : null;

  if (!token) throw new Error("No token");

  const res = await api.get('/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
