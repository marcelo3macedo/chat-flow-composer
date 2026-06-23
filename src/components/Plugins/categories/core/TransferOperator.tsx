import { UserCircleIcon } from "@heroicons/react/24/outline";

import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function TransferOperatorNode(props: NodeProps) {
  const department = props.data?.department as string;

  return (
    <BaseNode
      props={props}
      type="transfer_operator"
      icon={icons.TRANSFER_OPERATOR}
      title="Transferir operador"
      description="Transfer conversation to human agent"
      selected={props.selected}
    >
      {department ? (
        <div className="flex items-center gap-1.5 bg-[#1e1f29]/50 p-1.5 rounded-md border border-[#44475a]/40">
          <UserCircleIcon className="w-3.5 h-3.5 text-[#ffb86c] shrink-0" />
          <span className="text-[9px] text-gray-300 truncate">{department}</span>
        </div>
      ) : (
        <span className="text-[9px] italic text-gray-500">Nenhum departamento definido</span>
      )}
    </BaseNode>
  );
}
