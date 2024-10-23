import { create } from "zustand";
interface uuseProfileState {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
}
export const useProfileStore = create<uuseProfileState>((set) => ({
  isShow: false,
  setIsShow: (value: boolean) => set({ isShow: value }),
}));
