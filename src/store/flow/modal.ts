import { create } from 'zustand';

import type { ModalState } from '../../interfaces/Flow';

const useModalStore = create<ModalState>((set) => ({
  selected: '',
  setSelected: (selected: string) => set({ selected }),
}));

export default useModalStore;
