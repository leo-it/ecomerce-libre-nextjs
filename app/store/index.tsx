import create from "zustand";

interface CarState {
  carLength: number;
  setCarLength: (by: number) => void;
}
const useStore = create<CarState>()((set) => ({
  carLength: 0,

  setCarLength: (carLength: number) => set({ carLength }),
}));

export default useStore;
