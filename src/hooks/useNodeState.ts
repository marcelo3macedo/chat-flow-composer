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

  const updateNode = (id: string, data: any) => {
    const { workflow } = useFlowContentStore.getState();
    if (!workflow) return;

    useFlowContentStore.setState({
      workflow: {
        ...workflow,
        nodes: workflow.nodes.map((node) =>
          node.id === id
            ? {
                ...node,
                data: {
                  ...node.data,
                  ...data,
                },
              }
            : node
        ),
      },
    });
  };


  const clone = (nodeId: string) => {
    const { workflow } = useFlowContentStore.getState();
    if (!workflow) return;

    const sourceNode = workflow.nodes.find((n) => n.id === nodeId);
    if (!sourceNode) return;

    const clonedNode: Node = {
      ...sourceNode,
      id: crypto.randomUUID(),
      position: {
        x: sourceNode.position.x + 30,
        y: sourceNode.position.y + 30,
      },
      selected: false,
      data: {
        ...sourceNode.data,
        isInitial: false,
      },
    };

    useFlowContentStore.setState({
      workflow: {
        ...workflow,
        nodes: [...workflow.nodes, clonedNode],
      },
    });
  };

  const setAsInitial = (nodeId: string) => {
    const { workflow } = useFlowContentStore.getState();
    if (!workflow) return;

    const updatedNodes = workflow.nodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        isInitial: node.id === nodeId,
      },
    }));

    useFlowContentStore.setState({
      workflow: {
        ...workflow,
        nodes: updatedNodes,
      },
    });
  };

  return { add, remove, updateNode, clone, setAsInitial };
}
