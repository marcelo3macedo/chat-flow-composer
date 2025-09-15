import type { RequestData } from "./types/data";

export function SaveFields(
    { data, onUpdate }: { data: RequestData, onUpdate: any }
) {
  return (    
    <div>
        <label className="block text-sm font-medium text-gray-700">
            Save result to variable
        </label>
        <input
            type="text"
            value={data.resultVariable}
            onChange={(e) => onUpdate({ resultVariable: e.target.value })}
            placeholder="e.g., apiResponse"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
    </div>
  );
}