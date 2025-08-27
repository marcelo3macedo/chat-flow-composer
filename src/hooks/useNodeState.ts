import useFlowContent from "@Composer/store/flow/content";

import type { Edge, Node } from "@xyflow/react";

export function useNodeState() {
  const add = (node: Node, edge: Edge | undefined) => {
    const { nodes, edges } = useFlowContent.getState();
    const filteredNodes = nodes.filter(node => node.type !== 'initial');

    useFlowContent.setState({
        nodes: [...filteredNodes, node],
        edges: edge ? [...edges, edge] : edges
    });
  }

  return { add };
}