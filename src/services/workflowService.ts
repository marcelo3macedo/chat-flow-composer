import useFlowContentStore from "@Composer/store/flow/content";

import mockWorkflows from "../assets/mocks/workflows.json";

export const workflowService = {
  list: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockWorkflows;
  },

  create: () => {
    return useFlowContentStore.getState().createWorkflow();
  },
};