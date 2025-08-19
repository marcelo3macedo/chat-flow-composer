import { PlayIcon } from "@heroicons/react/20/solid";
import { BaseNode } from "./Base";

export function ManuallyNode() {
  return (
    <BaseNode
      icon={PlayIcon}
      type='manually'
      title="Start"
      description="Init the workflow"
      handleType="source-only"
    />
  );
}
