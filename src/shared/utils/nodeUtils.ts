import type { FinalConnectionState, Node, XYPosition } from "@xyflow/react";

function generateId(): string {
  return crypto.randomUUID();
}

function getNextPosition(position: XYPosition | null | undefined): { x: number, y: number } {
  if (!position) return { x: 0, y: 0 };

  return {
    x: position.x,
    y: position.y
  }
}

export function generateNodeByType(type: string, finalState: FinalConnectionState | null): Node {
  const newNode: Node = {
    id: generateId(),
    type,
    position: getNextPosition(finalState?.to),
    data: {}
  };

  return newNode;
}

export function generateInitialNode() {
  return [
    { id: 'n1', type: 'initial', position: { x: 0, y: 0 }, data: { label: 'Initial Node' } }
  ]
}