import { GlobeAltIcon } from "@heroicons/react/20/solid";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function WebhookNode(props: NodeProps) {
  return (
    <BaseNode
      props={props}
      icon={GlobeAltIcon}
      type='webhook'
      title="Webhook"
      description="Receives an request"
      handleType="source-only"
      selected={props.selected}
    />
  );
}
