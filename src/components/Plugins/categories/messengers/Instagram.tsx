import { BsInstagram } from "react-icons/bs";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function InstagramNode(props: NodeProps) {
  return (
    <BaseNode
      props={props}
      icon={BsInstagram}
      type='instagram'
      title="Instagram"
      description="Connects with Meta Instagram"
      selected={props.selected}
    />
  );
}
