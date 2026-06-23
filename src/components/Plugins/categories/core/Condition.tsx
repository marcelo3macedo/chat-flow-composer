import { Handle, Position } from "@xyflow/react";


import { icons } from "@Composer/shared/ui/icons";

import { CONDITION_OPERATORS } from "./conditionOperators";
import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

interface ConditionItem {
  id: string;
  variable: string;
  operator: string;
  value: string;
}

export function ConditionNode(props: NodeProps) {
  let conditions = (props.data?.conditions || []) as ConditionItem[];

  if (conditions.length === 0 && props.data?.variable) {
    conditions = [
      {
        id: "cond-0",
        variable: props.data.variable as string,
        operator: (props.data.operator || "equals") as string,
        value: (props.data.value || "") as string,
      },
    ];
  }

  return (
    <BaseNode
      props={props}
      type="condition"
      icon={icons.CONDITION}
      title="Condições"
      description="Direcionamento condicional de fluxo"
      handleType="branch"
      selected={props.selected}
    >
      <div className="flex flex-col w-full text-left text-[9px] divide-y divide-[#44475a]/20">
        {conditions.length === 0 ? (
          <div className="py-2 italic text-gray-500 text-center">
            Nenhuma condição definida
          </div>
        ) : (
          conditions.map((cond, index) => {
            const opInfo = CONDITION_OPERATORS.find((op) => op.value === cond.operator);
            const opSymbol = opInfo ? opInfo.symbol : cond.operator;
            const hasValue = cond.operator !== "exists" && cond.value;

            return (
              <div key={cond.id} className="relative py-1 pr-4 flex items-center justify-between text-gray-300 text-[8px]">
                <span className="truncate pr-1">
                  {cond.variable ? (
                    <>
                      <span className="text-[#bd93f9] font-semibold">{cond.variable}</span>
                      <span className="text-gray-400 font-normal"> {opSymbol}</span>
                      {hasValue && <span className="text-[#f1fa8c]"> {cond.value}</span>}
                    </>
                  ) : (
                    <span className="italic text-gray-500">Caminho {index + 1}</span>
                  )}
                </span>

                {/* Custom Source Handle for this condition path */}
                <Handle
                  type="source"
                  position={Position.Right}
                  id={cond.id}
                  className="w-2.5 h-2.5 bg-[#8be9fd] border border-[#1e1f29] hover:bg-[#50fa7b] transition-colors"
                  style={{ right: -12, top: "50%", transform: "translateY(-50%)" }}
                />
              </div>
            );
          })
        )}

        {/* Fallback option (Caso nenhuma das anteriores) */}
        {conditions.length > 0 ? (
        <div className="relative py-1 pr-4 flex items-center justify-between text-gray-400 font-medium">
          <span className="italic text-gray-400 text-[8px]">Senão (caso nenhuma)</span>

          {/* Custom Source Handle for fallback path */}
          <Handle
            type="source"
            position={Position.Right}
            id="fallback"
            className="w-2.5 h-2.5 bg-[#ff5555] border border-[#1e1f29] hover:bg-[#ff79c6] transition-colors"
            style={{ right: -12, top: "50%", transform: "translateY(-50%)" }}
          />
        </div>
        ) : <></>}
      </div>
    </BaseNode>
  );
}
