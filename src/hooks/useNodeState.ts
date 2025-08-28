import useFlowContentStore from "@Composer/store/flow/content";

import type { Edge, Node } from "@xyflow/react";

export function useNodeState() {
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

  return { add };
}
