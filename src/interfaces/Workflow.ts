import type { Edge, Node } from "@xyflow/react";

export interface Workflow {
  id: string;
  name: string;
  tags: string[];
  active: boolean;
}

export interface WorkflowContent {
  id: string;
  name: string;
  version: number;
  nodes: Node[];
  edges: Edge[];
  active: boolean;
  createdAt: string;
}

export interface WorkflowContentState {
  workflow: WorkflowContent | null;
  createWorkflow: (name?: string) => WorkflowContent;
  getWorkflow: () => WorkflowContent | null;
  setWorkflow: (workflow: any) => void;
  updateWorkflowField: <K extends keyof WorkflowContent>(
    key: K,
    value: WorkflowContent[K]
  ) => void;
}