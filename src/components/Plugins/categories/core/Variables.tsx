import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function VariablesNode(props: NodeProps) {
  const variables = (props.data?.variables || []) as { id: string; title: string; value: string }[];
  const filled = variables.filter((variable) => variable.title);

  return (
    <BaseNode
      props={props}
      type="variables"
      icon={icons.VARIABLES}
      title="Variáveis"
      description="Edit or insert variables"
      selected={props.selected}
    >
      {filled.length === 0 ? (
        <span className="text-[9px] italic text-gray-500">Nenhuma variável definida</span>
      ) : (
        <div className="space-y-0.5 text-left">
          {filled.slice(0, 2).map((variable) => (
            <p key={variable.id} className="text-[9px] text-gray-300 truncate">
              <span className="font-semibold text-[#bd93f9]">{variable.title}</span>
              <span className="text-gray-500"> = </span>
              <span>{variable.value || '—'}</span>
            </p>
          ))}
          {filled.length > 2 && (
            <p className="text-[8px] text-gray-500">+{filled.length - 2} variáveis</p>
          )}
        </div>
      )}
    </BaseNode>
  );
}
