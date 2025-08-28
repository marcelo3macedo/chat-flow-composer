import { XCircleIcon } from "@heroicons/react/20/solid";
import { EdgeLabelRenderer, useReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";

import ConfirmationModal from "./ConfirmationModal";

const foreignObjectSize = 40;

export default function CustomEdgeLabelRenderer({
    id,
    edgeCenterX,
    edgeCenterY,
    selected
}: any) {
    const { deleteElements } = useReactFlow();
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDeleteClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setShowConfirm(true);
    };

    const handleConfirmDelete = () => {
        deleteElements({ edges: [{ id }] });
        setShowConfirm(false);
    };

    useEffect(() => {
        if (!selected && showConfirm) {
        setShowConfirm(false);
        }
    }, [selected, showConfirm]);

    return (
        <EdgeLabelRenderer>
            <div
                style={{
                    position: "absolute",
                    left: edgeCenterX,
                    top: edgeCenterY,
                    transform: `translate(-50%, -50%)`,
                    pointerEvents: 'all',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: foreignObjectSize,
                    height: foreignObjectSize,
                }}
                className="edge-controls-container"
            >
            {selected && (
                <button
                    className="edge-delete-button"
                    onClick={handleDeleteClick}
                    aria-label="Remove"
                    title="Click to remove the connection"
                >
                    <XCircleIcon className="w-4 h-4 text-gray-400 bg-white rounded-2xl" />
                </button>
            )}
            {selected && showConfirm && (
                <ConfirmationModal
                    onConfirm={handleConfirmDelete}
                    onCancel={() => setShowConfirm(false)}
                />
            )}
            </div>
        </EdgeLabelRenderer>
    )
}