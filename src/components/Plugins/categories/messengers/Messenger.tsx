import { FaFacebook } from "react-icons/fa";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function MessengerNode(props: NodeProps) {
  return (
    <BaseNode
      props={props}
      icon={FaFacebook}
      type='messenger'
      title="Messenger"
      description="Integrates with Meta Messenger"
      selected={props.selected}
    />
  );
}
