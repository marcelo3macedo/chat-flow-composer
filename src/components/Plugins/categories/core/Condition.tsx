import { icons } from "@Composer/shared/ui/icons";

import { CONDITION_OPERATORS } from "./conditionOperators";
import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";


export function ConditionNode(props: NodeProps) {
  const variable = props.data?.variable as string;
  const operator = props.data?.operator as string;
  const value = props.data?.value as string;
  const operatorInfo = CONDITION_OPERATORS.find((option) => option.value === operator);

  return (
    <BaseNode
      props={props}
      type="condition"
      icon={icons.CONDITION}
      title="Condição"
      description="Branch flow based on condition"
      handleType="branch"
      selected={props.selected}
    >
      {variable ? (
        <p className="text-[9px] leading-relaxed text-gray-300 text-left">
          Se <span className="font-semibold text-[#bd93f9]">{variable}</span>
          {operatorInfo && <span className="text-gray-400"> {operatorInfo.symbol}</span>}
          {operatorInfo && operatorInfo.value !== 'exists' && value && (
            <span className="font-semibold text-[#f1fa8c]"> {value}</span>
          )}
        </p>
      ) : (
        <span className="text-[9px] italic text-gray-500">Nenhuma condição definida</span>
      )}
    </BaseNode>
  );
}
