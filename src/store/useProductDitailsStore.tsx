import { create } from "zustand";
interface useProductDetailsState {
  category: string;
  setCategory: (value: string) => void;
}
export const useProductDetailsStore = create<useProductDetailsState>((set) => ({
  category: "",
  setCategory: (value) => set({ category: value }),
}));
