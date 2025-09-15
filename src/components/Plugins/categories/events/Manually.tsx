import { PlayIcon } from "@heroicons/react/20/solid";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function ManuallyNode(props: NodeProps) {
  return (
    <BaseNode
      props={props}
      icon={PlayIcon}
      type='manually'
      title="Start"
      description="Init the workflow"
      handleType="source-only"
      selected={props.selected}
    />
  );
}
