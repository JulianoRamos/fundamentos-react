import { destroyCookie, setCookie } from "nookies";
import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "@/services/apiClient";

const CESUL_USER = "cesul.user";
const CESUL_TOKEN = "cesul.token";
const CESUL_REFRESHTOKEN = "cesul.refreshToken";

type Credentials = {
  email: string;
  password: string;
}

type User = {
  email: string;
  permissions: string[];
  roles: string[];
}

type SessionContextData = {
  user: User;
  updateUser: (user: User) => Promise<void>;
  signIn: ({ email, password }: Credentials) => Promise<void>;
}

const SessionContext = createContext({} as SessionContextData);

export async function signOut() {
  destroyCookie(null, CESUL_USER, {
    path: "/"
  });
}

interface SessionProviderProps {
  children: ReactNode;
}

export function SessionProvider({ children }: SessionProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  async function updateUser(user: User) {
    createCookie(CESUL_USER, JSON.stringify(user));
  }

  async function createCookie(name: string, value: string) {
    setCookie(null, name, value, {
      path: "/",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });
  }

  async function signIn({ email, password }: Credentials) {
    const response = await api.post('/sessions', {
      email,
      password
    });

    const { token, refreshToken, permissions, roles } = response.data;

    createCookie(CESUL_USER, JSON.stringify({ email, permissions, roles }));
    createCookie(CESUL_TOKEN, token);
    createCookie(CESUL_REFRESHTOKEN, refreshToken);

    setUser({ email, permissions, roles });
  }

  return (
    <SessionContext.Provider value={{ user, updateUser, signIn }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
