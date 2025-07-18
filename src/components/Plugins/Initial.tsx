import { PlayIcon } from "@heroicons/react/20/solid";
import { Handle, Position } from "@xyflow/react";

export function InitialNode() {
  return (
    <div className="flex flex-col items-center">
      <div className="
        relative border border-gray-300 rounded-lg shadow-sm 
        p-2 flex items-center justify-center bg-gray-100
      ">
        <Handle type="source" position={Position.Right} />

        <div className="p-2 rounded-md">
          <PlayIcon className="h-8 w-8 text-slate-700" />
        </div>
      </div>

      <p className="text-sm font-semibold text-gray-800">
        Start
      </p>

      <p className="text-xs text-gray-500 text-center leading-tight">
        Init the workflow
      </p>
    </div>
  );
}
