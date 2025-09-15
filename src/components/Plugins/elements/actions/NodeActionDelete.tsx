import { XCircleIcon } from "@heroicons/react/20/solid";

import { useNodeActionsState } from "@Composer/hooks/nodes/useNodeActionsState";
import ConfirmationModal from "@Composer/shared/ui/modals/ConfirmationModal";

import type { NodeProps } from "@xyflow/react";

export function NodeActionDelete({ props }: { props?: NodeProps }) {
    const {
        removeIconClick, confirmRemoveClick, cancelClick, showConfirm
    } = useNodeActionsState(props);

    return (
        <div>
            <XCircleIcon    
                className="w-4 h-4 text-gray-400 bg-white rounded-2xl hover:cursor-pointer"
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