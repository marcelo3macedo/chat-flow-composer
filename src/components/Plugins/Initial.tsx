import { PlayIcon } from "@heroicons/react/20/solid";
import { BaseNode } from "./Base";

export function InitialNode() {
  return (
    <BaseNode
      icon={PlayIcon}
      title="Start"
      description="Init the workflow"
      handleType="source-only"
    />
  );
}
