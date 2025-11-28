"use client";

import React, { createContext, useState, useEffect } from "react";
import { authService } from "../services/auth.service";
import type { Author } from "@/shared/types/common.types";

/**
 * Auth context value type
 */
export interface AuthContextValue {
    user: Author | null;
    setUser: (user: Author | null) => void;
    loaded: boolean;
    isAuthenticated: boolean;
}

/**
 * Auth context for managing authentication state
 */
export const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Auth provider component
 */
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<Author | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const data = await authService.getProfile();
                setUser(data);
            } catch {
                setUser(null);
            } finally {
                setLoaded(true);
            }
        };

        loadUser();
    }, []);

    const value: AuthContextValue = {
        user,
        setUser,
        loaded,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
