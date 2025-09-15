import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function RequestNode(props: NodeProps) {
  return (
    <BaseNode
      props={props}
      type="request"
      icon={icons.REQUEST}
      title="Request"
      description="Make a HTTP request"
      selected={props.selected}
    />
  );
}
