import { IProduct, IProducts } from "@/types/sheme";
import { create } from "zustand";
interface useActionsState {
  editId: string;
  editProduct: Partial<IProducts>;
  setEditProducts: (value: IProducts) => void;
  setEditId: (value: string) => void;
}
export const useEditProductStore = create<useActionsState>((set) => ({
  editId: "",
  editProduct: {},
  setEditId: (value) => set({ editId: value }),
  setEditProducts: (value) => set({ editProduct: value }),
}));
