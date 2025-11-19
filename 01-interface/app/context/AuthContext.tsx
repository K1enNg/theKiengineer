"use client"

import React, { useEffect, useState } from 'react'
import { createContext } from "react"
import { getProfile } from '../utils/auth';

const AuthContext = createContext<any>(null);


const AuthProvider = ({ children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const data = await getProfile();
                setUser(data);
            } catch {
                setUser(null);
            } finally {
                setLoaded(true);
            }
        }

        loadUser();
    }, [])
  return (
    <AuthContext.Provider value={{ user, setUser, loaded }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
export { AuthContext };