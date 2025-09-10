import { NodeActionDelete } from "./actions/NodeActionDelete";

import type { NodeProps } from "@xyflow/react";

interface NodeSelectedActionsProps {
  selected?: boolean;
  props?: NodeProps;
}

export function NodeSelectedActions({ selected, props }: NodeSelectedActionsProps) {
    if (!selected) return <></>

    return (
        <div className="absolute rounded-md mt-[-90px]">
            <NodeActionDelete props={props} />
        </div>
    )
}