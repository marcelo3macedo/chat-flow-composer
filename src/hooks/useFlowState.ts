import { useCallback, useState } from 'react';
import { applyNodeChanges, applyEdgeChanges, addEdge, type Edge, type Node, type NodeChange, type EdgeChange, type Connection } from '@xyflow/react';

const initialNodes = [
  { id: 'n1', type: 'initialNode', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: 'n2', type: 'requestNode', position: { x: 150, y: 0 }, data: { label: 'Node 2' } },
  { id: 'n3', type: 'messageNode', position: { x: 300, y: 0 }, data: { label: 'Node 3' } },
];
const initialEdges = [
  { id: 'n1-n2', source: 'n1', target: 'n2' },
  { id: 'n2-n3', source: 'n2', target: 'n3' }
];

export function useFlowState() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return { nodes, edges, onNodesChange, onEdgesChange, onConnect };
}
