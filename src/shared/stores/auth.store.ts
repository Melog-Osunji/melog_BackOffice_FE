import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  accessToken: string | null;
  adminName: string | null;
  setAuth: (token: string, name: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      adminName: null,
      setAuth: (token, name) => set({ accessToken: token, adminName: name }),
      logout: () => set({ accessToken: null, adminName: null }),
    }),
    { name: "backoffice-auth" }
  )
);
