// npx expo install @react-native-async-storage/async-storage
// https://docs.pmnd.rs/zustand/integrations/persisting-store-data

import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "types/ApiTypes";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  token?: string;
  user?: User;
};

type Actions = {
  setToken: (token: string, user: User) => void;
  clearToken: () => void;
};

const useToken = create<State & Actions>()(
  persist(
    (set) => ({
      token: undefined,
      user: undefined,
      setToken: (token: string, user: User) => set(() => ({ token, user })),
      clearToken: () => set(() => ({ token: undefined, user: undefined })),
    }),
    {
      name: "token",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useToken;
