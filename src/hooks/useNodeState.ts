import { generateInitialNode } from "@Composer/shared/utils/nodeUtils";
import useFlowContentStore from "@Composer/store/flow/content";

import type { Edge, Node } from "@xyflow/react";

export function useNodeState() {
  const initialNodes = generateInitialNode();

  const add = (node: Node, edge?: Edge) => {
    const { workflow } = useFlowContentStore.getState();
    if (!workflow) return;

    const filteredNodes = workflow.nodes.filter((n) => n.type !== "initial");

    useFlowContentStore.setState({
      workflow: {
        ...workflow,
        nodes: [...filteredNodes, node],
        edges: edge ? [...workflow.edges, edge] : workflow.edges,
      },
    });
  };

  const remove = (nodeId: string) => {
    const { workflow } = useFlowContentStore.getState();
    if (!workflow) return;

    const nodeFiltered = workflow.nodes.filter((n) => n.id !== nodeId);
    const nodes = (nodeFiltered.length === 0) ? initialNodes : nodeFiltered;
    
    useFlowContentStore.setState({
      workflow: {
        ...workflow,
        nodes: nodes,
        edges: workflow.edges.filter(
          (e) => e.source !== nodeId && e.target !== nodeId
        ),
      },
    });
  };

  return { add, remove };
}
