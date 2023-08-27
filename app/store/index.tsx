import create from 'zustand';

const useStore = create((set) => ({
  carLength: null,

  setCarLength: (carLength) => set({ carLength }),

}));

export default useStore;
