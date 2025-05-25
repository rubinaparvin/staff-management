import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Store = {
  isAuthenticated: boolean;
  login: () => void;
  logOut: () => void;
};

const useAuth = create<Store>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => set(() => ({ isAuthenticated: true })),
      logOut: () => set(() => ({ isAuthenticated: false })),
    }),
    {
      name: "use-auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useAuth;
