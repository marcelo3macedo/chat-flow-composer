import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";
import { BaseNode } from "./Base";

export function MessageNode() {
  return (
    <BaseNode
      icon={ChatBubbleLeftEllipsisIcon}
      title="Message"
      description="Sends a message"
    />
  );
}
