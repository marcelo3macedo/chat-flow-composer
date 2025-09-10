import { useState } from "react";

import { useNodeState } from "../useNodeState";

import type { NodeProps } from "@xyflow/react";

export function useNodeActionsState(props?: NodeProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const { remove } = useNodeState();
  
  const cancelClick = () => {
      setShowConfirm(false);
  }

  const removeIconClick = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    setShowConfirm(!showConfirm)
  }

  const confirmRemoveClick = () => {
    if (!props || !props.id) return;

    remove(props.id);
    setShowConfirm(false);
  }

  return {
    showConfirm,
    cancelClick,
    removeIconClick,
    confirmRemoveClick
   };
}
