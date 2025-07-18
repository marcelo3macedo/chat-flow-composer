import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Handle, Position } from "@xyflow/react";

export function RequestNode() {
  return (
    <div className="flex flex-col items-center">
      <div className="
        relative border border-gray-300 rounded-lg shadow-sm 
        p-2 flex items-center justify-center bg-gray-100
      ">
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />

        <div className="p-2 rounded-md">
          <GlobeAltIcon className="h-8 w-8 text-slate-700" />
        </div>
      </div>

      <p className="text-sm font-semibold text-gray-800">
        Request
      </p>

      <p className="text-xs text-gray-500 text-center leading-tight">
        Make a HTTP request
      </p>
    </div>
  );
}
