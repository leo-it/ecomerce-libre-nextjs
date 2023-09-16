import create from "zustand";

const useStore = create((set) => ({
  carLength: null,

  setCarLength: (carLength: number) => set({ carLength }),
}));

export default useStore;
