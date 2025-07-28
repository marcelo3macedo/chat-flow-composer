import type { Node } from "@xyflow/react";

function generateId(): string {
  return crypto.randomUUID();
}

function getNextPosition(): { x: number, y: number } {
  return { x: 0, y: 0 };
}

export function generateNodeByType(type: string): Node {
  const newNode: Node = {
    id: generateId(),
    type,
    position: getNextPosition(),
    data: {}
  };

  return newNode;
}