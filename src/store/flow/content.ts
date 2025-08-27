import { create } from 'zustand';

import type { ContentState } from '../../interfaces/Flow';
import type { Node } from '@xyflow/react';

const initialNodes = [
  { id: 'n1', type: 'initial', position: { x: 0, y: 0 }, data: { label: 'Node 1' } }
] as Node[];

const useFlowContent = create<ContentState>(() => ({
  nodes: initialNodes,
  edges: []
}));

export default useFlowContent;
