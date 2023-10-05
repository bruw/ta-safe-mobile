// npx expo install @react-native-async-storage/async-storage
// https://docs.pmnd.rs/zustand/integrations/persisting-store-data

import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  token?: string;
};

type Actions = {
  setToken: (token?: string) => void;
};

const useToken = create<State & Actions>()(
  persist(
    (set) => ({
      token: undefined,
      setToken: (token?: string) => set(() => ({ token })),
    }),
    {
      name: "token",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useToken;
