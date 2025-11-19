"use client"

import { AuthContext } from "@/app/context/AuthContext";
import { useContext } from "react";

export function useAuth() {
    return useContext(AuthContext);
}