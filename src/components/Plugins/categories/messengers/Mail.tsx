import { BsMailbox } from "react-icons/bs";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function MailNode(props: NodeProps) {
  return (
    <BaseNode
      props={props}
      icon={BsMailbox}
      type='mail'
      title="Mail"
      description="Sends an mail"
      selected={props.selected}
    />
  );
}
