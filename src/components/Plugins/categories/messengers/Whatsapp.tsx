import { IoLogoWhatsapp } from "react-icons/io";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function WhatsappNode(props: NodeProps) {
  return (
    <BaseNode
      props={props}
      icon={IoLogoWhatsapp}
      type='whatsapp'
      title="Whatsapp"
      description="Integrates with Whatsapp"
      selected={props.selected}
    />
  );
}
