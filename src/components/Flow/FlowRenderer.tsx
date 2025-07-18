import { Controls, MiniMap, ReactFlow } from '@xyflow/react';
import { useFlowState } from '../../hooks/useFlowState';
import { nodeTypes } from '../Plugins';

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
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView>
      <Controls />
      <MiniMap
        nodeStrokeWidth={3}
        pannable={true}
      />
    </ReactFlow>
  );
}
