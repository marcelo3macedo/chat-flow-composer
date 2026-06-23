import { PlayIcon } from "@heroicons/react/20/solid";
import { Handle, Position } from "@xyflow/react";

import type { BaseNodeProps } from "@Composer/interfaces/Plugin";
import useModalStore from "@Composer/store/flow/modal";

import { NodeSelectedActions } from "./elements/NodeSelectedActions";

export function BaseNode({
  icon: Icon,
  title,
  description,
  handleType = 'source-target',
  selected,
  props,
  children
}: BaseNodeProps) {
  const { setSelected, setProps } = useModalStore(state => state);
  const isInitial = !!props?.data?.isInitial;
  
  const onClick = () => {
    if (!selected) return;

    setSelected(props?.type || 'initial');

    if (props) setProps(props);
  }

  return (
    <div 
      onClick={onClick}
      className={`
        relative flex flex-col w-[180px] rounded-lg border bg-[#1e1f29] text-[#f8f8f2] shadow-sm transition-all duration-200 cursor-pointer
        ${isInitial
          ? "border-[#50fa7b] shadow shadow-[#50fa7b]/10"
          : selected 
            ? "border-[#8be9fd] shadow shadow-[#8be9fd]/10" 
            : "border-[#44475a]/50 hover:border-[#6272a4]/75"
        }
      `}
    >
      {/* Green indicator badge with start icon if it is the starting node */}
      {isInitial && (
        <div className="absolute -top-5 left-0 z-10 bg-[#50fa7b]/50 border border-[#50fa7b] text-[#50fa7b] rounded-full px-1.5 py-0.5 flex items-center gap-0.5 shadow-sm group/initial">
          <PlayIcon className="h-2 w-2 shrink-0 fill-current" />
          <span className="text-[7px] font-semibold uppercase tracking-wider">Início</span>
          
          {/* Tooltip on hover */}
          <span className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 scale-0 group-hover/initial:scale-100 transition-all duration-100 bg-[#282a36] text-gray-300 text-[8px] px-1.5 py-0.5 rounded shadow border border-[#44475a] whitespace-nowrap z-50 pointer-events-none normal-case font-normal">
            Ponto de partida do fluxo (a conversa iniciará por aqui)
          </span>
        </div>
      )}

      {/* Node selected actions delete/clone/initial toolbar */}
      <NodeSelectedActions selected={selected} props={props} />

      {/* Target handle */}
      {handleType !== 'source-only' && (
        <Handle 
          type="target" 
          position={Position.Left} 
          className="w-2 h-2 bg-[#8be9fd] border border-[#1e1f29]"
        />
      )}
      
      {/* Source handle */}
      {handleType !== 'branch' && (
        <Handle 
          type="source" 
          position={Position.Right} 
          className="w-2 h-2 bg-[#8be9fd] border border-[#1e1f29]"
        />
      )}

      {/* Header: Icon + Node Type */}
      <div className="flex items-center gap-1 border-b border-[#44475a]/40 bg-[#20222c]/50 px-2 py-1 rounded-t-lg">
        <Icon className="h-2.5 w-2.5 text-[#8be9fd] shrink-0" />
        <span className="text-[7px] font-semibold tracking-wider text-gray-300">
          {title}
        </span>
      </div>

      {/* Content area: either children or description */}
      <div className="px-2 py-1 bg-[#282a36] rounded-b-lg flex flex-col justify-center">
        {children ? children : (
          <p className="text-[9px] leading-normal text-gray-400 text-left">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
