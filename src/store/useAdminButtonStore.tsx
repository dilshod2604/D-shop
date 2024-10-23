import { create } from "zustand";
interface AdminButtonState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export const useAdminButtonStore = create<AdminButtonState>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}));
