// npx expo install @react-native-async-storage/async-storage
// https://docs.pmnd.rs/zustand/integrations/persisting-store-data

import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "types/ApiTypes";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  token: string | null;
  user: User | null;
};

type Actions = {
  setToken: (token: string, user: User) => void;
  clearToken: () => void;
};

const useToken = create<State & Actions>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setToken: (token: string, user: User) => set(() => ({ token, user })),
      clearToken: () => set(() => ({ token: null, user: null })),
    }),
    {
      name: "token",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useToken;
