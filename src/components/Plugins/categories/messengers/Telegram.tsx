import { FaTelegram } from "react-icons/fa";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function TelegramNode(props: NodeProps) {
  return (
    <BaseNode
      props={props}
      icon={FaTelegram}
      type='telegram'
      title="Telegram"
      description="Integrates with Telegram"
      selected={props.selected}
    />
  );
}
