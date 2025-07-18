import { create } from 'zustand';

interface BackgroundState {
  backgroundImage: string;
  setBackgroundImage: (url: string) => void;
}

const defaultBackgroundImage = import.meta.env.VITE_DEFAULT_BG_IMAGE || '/fallback-bg.jpg';

const useBackgroundStore = create<BackgroundState>((set) => ({
  backgroundImage: defaultBackgroundImage,
  setBackgroundImage: (url: string) => set({ backgroundImage: url }),
}));

export default useBackgroundStore;
