import { createContext, useState, type ReactNode } from "react";
import type { LoginFormData, User } from "../api/types/auth.js";

export interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (credentials: LoginFormData) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}:{children:ReactNode}){
    const [user,setUser] = useState<User|null>(null)
}