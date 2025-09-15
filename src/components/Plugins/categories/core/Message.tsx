import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function MessageNode(props: NodeProps) {
  return (
    <BaseNode
      props={props}
      icon={icons.MESSAGE}
      type='message'
      title="Message"
      description="Sends a message"
      selected={props.selected}
    />
  );
}
