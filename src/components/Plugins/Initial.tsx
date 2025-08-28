import { PlusCircleIcon } from "@heroicons/react/24/outline";

import { BaseInitialNode } from "./BaseInitial";

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
