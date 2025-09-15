import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function VariablesNode(props: NodeProps) {
  return (
    <BaseNode
      props={props}
      type="variables"
      icon={icons.VARIABLES}
      title="Variables"
      description="Edit or insert variables"
      selected={props.selected}
    />
  );
}
