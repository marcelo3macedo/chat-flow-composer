import type { Edge, FinalConnectionState, Node } from "@xyflow/react";

export function generateEdgeByType(finalState: FinalConnectionState | null, node: Node) {
    if (!finalState) return

    return {
        id: `${finalState?.fromNode?.id}:${node.id}`,
        source: finalState?.fromNode?.id,
        target: node.id
    } as Edge
}