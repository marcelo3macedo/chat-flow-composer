import { Controls, MiniMap, ReactFlow } from '@xyflow/react';

import { useFlowState } from '../../hooks/useFlowState';
import { nodeTypes } from '../Plugins';

export default function FlowRenderer() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onConnectEnd,
  } = useFlowState();
  
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onConnectEnd={onConnectEnd}
      fitView>
      <Controls />
      <MiniMap
        nodeStrokeWidth={3}
        pannable={true}
      />
    </ReactFlow>
  );
}
