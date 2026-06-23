import { TrashIcon } from "@heroicons/react/24/outline";

import { useNodeActionsState } from "@Composer/hooks/nodes/useNodeActionsState";
import ConfirmationModal from "@Composer/shared/ui/modals/ConfirmationModal";

import type { NodeProps } from "@xyflow/react";

export function NodeActionDelete({ props }: { props?: NodeProps }) {
    const {
        removeIconClick, confirmRemoveClick, cancelClick, showConfirm
    } = useNodeActionsState(props);

    return (
        <div>
            <TrashIcon    
                className="w-2.5 h-2.5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors"
                onClick={removeIconClick}
            />
            {showConfirm && (
                <ConfirmationModal
                    onConfirm={confirmRemoveClick}
                    onCancel={cancelClick}
                />
            )}
        </div>
    )
}