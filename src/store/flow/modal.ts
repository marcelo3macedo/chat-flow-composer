import { create } from 'zustand';

import type { ModalState } from '../../interfaces/Flow';
import type { NodeProps } from '@xyflow/react';

const useModalStore = create<ModalState>((set) => ({
  selected: '',
  props: undefined,
  searchQuery: '',
  setSelected: (selected: string) => set({ selected }),
  setProps: (props: NodeProps) => set({ props }),
  setSearchQuery: (searchQuery: string) => set({ searchQuery }),
  updateProps: (partial: Partial<NodeProps>) =>
    set((state) => ({
      props: state.props ? { ...state.props, ...partial } : (partial as NodeProps),
    })),
}));

export default useModalStore;
