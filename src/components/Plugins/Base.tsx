import { Handle, Position } from "@xyflow/react";
import type { BaseNodeProps } from "../../interfaces/Plugin";
import useModalStore from "../../store/flow/modal";

export function BaseNode({
  icon: Icon,
  title,
  description,
  handleType = 'source-target',
  type = 'initial',
}: BaseNodeProps) {
  const setSelected = useModalStore(state => state.setSelected);
  const onClick = () => {
    setSelected(type)
  }

  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <div className="
        relative border border-gray-300 rounded-lg shadow-sm 
        p-2 flex items-center justify-center bg-gray-100
      ">
        {handleType === 'source-target' && (
          <Handle type="target" position={Position.Left} />
        )}
        <Handle type="source" position={Position.Right} />

        <div className="p-2 rounded-md">
          <Icon className="h-8 w-8 text-slate-700" />
        </div>
      </div>

      <p className="text-sm font-semibold text-gray-800">{title}</p>
      <p className="text-xs text-gray-500 text-center leading-tight">{description}</p>
    </div>
  );
}
