import { create } from "zustand";
interface useUpdateProductState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  close: (value: boolean) => void;
}
export const useUpdateProductStore = create<useUpdateProductState>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
  close: (value) => set({ isOpen: value }),
}));
