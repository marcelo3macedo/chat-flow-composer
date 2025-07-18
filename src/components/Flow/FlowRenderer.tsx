import { ReactFlow } from '@xyflow/react';
import { useFlowState } from '../../hooks/useFlowState';

export default function FlowRenderer() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useFlowState();

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    />
  );
}
