import { Handle, Position } from "@xyflow/react";

import type { BaseNodeProps } from "@Composer/interfaces/Plugin";
import useModalStore from "@Composer/store/flow/modal";

import { NodeContainer } from "./elements/NodeContainer";
import { NodeSelectedActions } from "./elements/NodeSelectedActions";

export function BaseNode({
  icon: Icon,
  title,
  description,
  handleType = 'source-target',
  selected,
  props
}: BaseNodeProps) {
  const setSelected = useModalStore(state => state.setSelected);
  const onClick = () => {
    if (!selected) return;

    setSelected(props?.type || 'initial');
  }

  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <NodeContainer selected={selected}>
          <NodeSelectedActions selected={selected} props={props} />

          {handleType === 'source-target' && (
            <Handle type="target" position={Position.Left} />
          )}
          <Handle type="source" position={Position.Right} />

          <div className="p-2 rounded-md">
            <Icon className="h-8 w-8 text-slate-700" />
          </div>
      </NodeContainer>

      <p className="text-sm font-semibold text-gray-800">{title}</p>
      <p className="text-xs text-gray-500 text-center leading-tight">{description}</p>      
    </div>
  );
}
