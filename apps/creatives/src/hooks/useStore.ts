import { create } from "zustand";

type Store = {
  unmountLoader: boolean;
  setUnmountLoader: (unmountLoader: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  unmountLoader: false,
  setUnmountLoader: () => set(() => ({ unmountLoader: true })),
}));
