import { type NodeChange, type EdgeChange, type Connection, type FinalConnectionState } from '@xyflow/react';
import { useCallback } from 'react';

import useFlowContent from '@Composer/store/flow/content';

import { useConnectState } from './useConnectState';

export function useFlowState() {
  const { nodes, edges } = useFlowContent();
  const { connectionEnded } = useConnectState();

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
  const onConnectEnd = useCallback((event: MouseEvent | TouchEvent, params: FinalConnectionState) => {
    connectionEnded(event, params);
  }, [connectionEnded]);

  return { nodes, edges, onNodesChange, onEdgesChange, onConnect, onConnectEnd };
}
