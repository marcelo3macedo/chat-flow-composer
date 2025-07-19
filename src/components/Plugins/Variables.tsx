import { BaseNode } from "./Base";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export function VariablesNode() {
  return (
    <BaseNode
      type="variables"
      icon={AdjustmentsHorizontalIcon}
      title="Variables"
      description="Edit or insert variables"
    />
  );
}
