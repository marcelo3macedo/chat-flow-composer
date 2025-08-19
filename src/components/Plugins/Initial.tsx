import { BaseInitialNode } from "./BaseInitial";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export function InitialNode() {
  return (
    <BaseInitialNode
      icon={PlusCircleIcon}
      title="Initial"
      description="Click to add an action"
      handleType="source-only"
    />
  );
}
