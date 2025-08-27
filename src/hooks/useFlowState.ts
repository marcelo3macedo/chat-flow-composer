import { type NodeChange, type EdgeChange, type Connection, type FinalConnectionState, applyNodeChanges, applyEdgeChanges, addEdge, type Edge } from '@xyflow/react';
import { useCallback } from 'react';

import useFlowContentStore from '@Composer/store/flow/content';

import { useConnectState } from './useConnectState';

export function useFlowState() {
  const { workflow, updateWorkflowField } = useFlowContentStore();
  const { connectionEnded } = useConnectState();

  const onNodesChange = (changes: NodeChange[]) => {
    if (!workflow) return;
    const newNodes = applyNodeChanges(changes, workflow.nodes);
    updateWorkflowField('nodes', newNodes);
  };

  const onEdgesChange = (changes: EdgeChange[]) => {
    if (!workflow) return;
    const newEdges = applyEdgeChanges(changes, workflow.edges);
    updateWorkflowField('edges', newEdges);
  };

  const onConnect = (connection: Connection) => {
    if (!workflow) return;
    const newEdges = addEdge(connection, workflow.edges);
    updateWorkflowField('edges', newEdges);
  };

  const onConnectEnd = useCallback((event: MouseEvent | TouchEvent, params: FinalConnectionState) => {
    connectionEnded(event, params);
  }, [connectionEnded]);

  return { workflow, onNodesChange, onEdgesChange, onConnect, onConnectEnd };
}
