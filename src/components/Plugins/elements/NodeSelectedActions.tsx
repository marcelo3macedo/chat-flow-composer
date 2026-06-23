import { FlagIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import { useNodeState } from "@Composer/hooks/useNodeState";

import { NodeActionDelete } from "./actions/NodeActionDelete";

import type { NodeProps } from "@xyflow/react";

interface NodeSelectedActionsProps {
  selected?: boolean;
  props?: NodeProps;
}

export function NodeSelectedActions({ selected, props }: NodeSelectedActionsProps) {
    const { clone, setAsInitial } = useNodeState();
    
    if (!selected || !props) return <></>;

    return (
      <div 
        onClick={(e) => e.stopPropagation()} // Prevent clicking toolbar from selecting/deselecting node
        className="absolute -top-7 right-0 z-30 flex items-center bg-[#1e1f29] border border-[#44475a] p-0.5 rounded shadow-lg space-x-0.5"
      >
        {/* Definir como Inicial Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setAsInitial(props.id);
          }}
          className="group relative p-1 text-gray-400 hover:text-[#50fa7b] hover:bg-[#282a36] rounded transition-colors flex items-center justify-center"
        >
          <FlagIcon className="w-2.5 h-2.5" />
          <span className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-100 bg-[#282a36] text-[#f8f8f2] text-[8px] px-1.5 py-0.5 rounded shadow border border-[#44475a] whitespace-nowrap z-50 pointer-events-none">
            Definir como Estado Inicial
          </span>
        </button>

        {/* Clonar Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            clone(props.id);
          }}
          className="group relative p-1 text-gray-400 hover:text-[#8be9fd] hover:bg-[#282a36] rounded transition-colors flex items-center justify-center"
        >
          <DocumentDuplicateIcon className="w-2.5 h-2.5" />
          <span className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-100 bg-[#282a36] text-[#f8f8f2] text-[8px] px-1.5 py-0.5 rounded shadow border border-[#44475a] whitespace-nowrap z-50 pointer-events-none">
            Clonar Caixa
          </span>
        </button>

        {/* Remover Button */}
        <div className="group relative p-1 hover:bg-[#282a36] rounded transition-colors flex items-center justify-center">
          <NodeActionDelete props={props} />
          <span className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-100 bg-[#282a36] text-[#f8f8f2] text-[8px] px-1.5 py-0.5 rounded shadow border border-[#44475a] whitespace-nowrap z-50 pointer-events-none">
            Remover Caixa
          </span>
        </div>
      </div>
    );
}