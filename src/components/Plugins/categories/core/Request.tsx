import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

const METHOD_COLORS: Record<string, string> = {
  GET: 'text-[#50fa7b]',
  POST: 'text-[#8be9fd]',
  PUT: 'text-[#f1fa8c]',
  PATCH: 'text-[#bd93f9]',
  DELETE: 'text-[#ff5555]',
};

export function RequestNode(props: NodeProps) {
  const request = props.data?.request as { url?: string; type?: string } | undefined;

  return (
    <BaseNode
      props={props}
      type="request"
      icon={icons.REQUEST}
      title="Requisição"
      description="Make a HTTP request"
      selected={props.selected}
    >
      {request?.url ? (
        <div className="flex items-center gap-1.5 text-[9px] text-left">
          <span className={`font-bold ${METHOD_COLORS[request.type || 'GET'] || 'text-gray-300'}`}>
            {request.type || 'GET'}
          </span>
          <span className="truncate text-gray-300">{request.url}</span>
        </div>
      ) : (
        <span className="text-[9px] italic text-gray-500">Nenhuma URL configurada</span>
      )}
    </BaseNode>
  );
}
