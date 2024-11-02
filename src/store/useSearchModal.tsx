import { create } from "zustand";
interface useSearchModalState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export const useSearchModal = create<useSearchModalState>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}));
