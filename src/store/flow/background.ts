import { create } from 'zustand';
import type { BackgroundState } from '../../interfaces/Flow';

const defaultBackgroundImage = import.meta.env.VITE_DEFAULT_BG_IMAGE || '/fallback-bg.jpg';

const useBackgroundStore = create<BackgroundState>((set) => ({
  backgroundImage: defaultBackgroundImage,
  setBackgroundImage: (url: string) => set({ backgroundImage: url }),
}));

export default useBackgroundStore;
