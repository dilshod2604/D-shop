import { create } from "zustand";
interface useActionsState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export const useActionsStore = create<useActionsState>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}));
