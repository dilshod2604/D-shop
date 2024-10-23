import { create } from "zustand";
interface AddProductState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  close: (value: boolean) => void;
}
export const useAddProductStore = create<AddProductState>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
  close: (value) => set({ isOpen: value }),
}));

