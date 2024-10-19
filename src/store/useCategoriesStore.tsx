import { create } from "zustand";
interface useCategoriesState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export const useCategoriesStore = create<useCategoriesState>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}));
