import { v4 as uuid } from 'uuid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { WorkflowContent, WorkflowContentState } from '@Composer/interfaces/Workflow';
import { generateInitialNode } from '@Composer/shared/utils/nodeUtils';

const useFlowContentStore = create<WorkflowContentState>()(
  persist(
    (set, get) => ({
      workflow: null,

      createWorkflow: (name = 'Untitled') => {
        const initialNodes = generateInitialNode();
        const newWf: WorkflowContent = {
          id: uuid(),
          name,
          version: 1,
          nodes: initialNodes,
          edges: [],
          createdAt: new Date().toISOString(),
        };
        set(() => ({ workflow: newWf }));
        return newWf;
      },

      getWorkflow: () => {
        return get().workflow;        
      }
    }),
    { name: 'flow-content-storage' }
  )
);

export default useFlowContentStore;
