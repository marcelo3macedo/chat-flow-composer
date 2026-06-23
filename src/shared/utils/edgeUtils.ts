import type { Edge, FinalConnectionState, Node } from "@xyflow/react";

export function generateEdgeByType(finalState: FinalConnectionState | null, node: Node) {
    if (!finalState) return

    return {
        id: `${finalState?.fromNode?.id}:${node.id}`,
        source: finalState?.fromNode?.id,
        sourceHandle: finalState?.fromHandle?.id ?? undefined,
        target: node.id,
        type: 'custom-edge'
    } as Edge
}