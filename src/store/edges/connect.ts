import { create } from 'zustand';

import type { EdgeState } from '../../interfaces/Edge';
import type { FinalConnectionState } from '@xyflow/react';

const useConnectEdgesStore = create<EdgeState>((set) => ({
  finalState: null,
  setFinalState: (finalState: FinalConnectionState | null) => set({ finalState }),
}));

export default useConnectEdgesStore;