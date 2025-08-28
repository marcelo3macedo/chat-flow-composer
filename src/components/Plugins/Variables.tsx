import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "./Base";

export function VariablesNode() {
  return (
    <BaseNode
      type="variables"
      icon={icons.VARIABLES}
      title="Variables"
      description="Edit or insert variables"
    />
  );
}
