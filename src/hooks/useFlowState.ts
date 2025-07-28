import { useCallback } from 'react';
import { type NodeChange, type EdgeChange, type Connection } from '@xyflow/react';
import useFlowContent from '../store/flow/content';

export function useFlowState() {
  const { nodes, edges } = useFlowContent();

  const onNodesChange = useCallback(
    (_changes: NodeChange[]) => () => {},
    [],
  );
  const onEdgesChange = useCallback(
    (_changes: EdgeChange[]) => () => {},
    [],
  );
  const onConnect = useCallback(
    (_params: Connection) => () => {},
    [],
  );

  return { nodes, edges, onNodesChange, onEdgesChange, onConnect };
}
