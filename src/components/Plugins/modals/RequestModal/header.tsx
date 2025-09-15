import { ChevronDownIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import type { RequestData } from "./types/data";

export function Header(
    { data, onUpdate }: { data: RequestData, onUpdate: any }
) {
  const [showHeaders, setShowHeaders] = useState(false);

  const handleHeaderChange = (id: string, field: "key" | "value", text: string) => {
    const newHeaders = data.headers.map((header) =>
      header.id === id ? { ...header, [field]: text } : header
    );
    onUpdate({ headers: newHeaders });
  };

  const addHeader = () => {
    const newHeaders = [...data.headers, { id: Date.now().toString(), key: "", value: "" }];
    onUpdate({ headers: newHeaders });
  };

  const removeHeader = (id: string) => {
    const newHeaders = data.headers.filter((header) => header.id !== id);
    onUpdate({ headers: newHeaders });
  };

  return (    
    <div>
      <button
        type="button"
        onClick={() => setShowHeaders(!showHeaders)}
        className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
      >
        {showHeaders ? (
          <ChevronDownIcon className="h-4 w-4 mr-1" />
        ) : (
          <ChevronRightIcon className="h-4 w-4 mr-1" />
        )}
        Headers
      </button>
      {showHeaders && (
        <div className="space-y-2 mt-2">
          {data.headers.map((header) => (
            <div key={header.id} className="flex space-x-2 items-center">
              <input
                type="text"
                placeholder="Key"
                value={header.key}
                onChange={(e) => handleHeaderChange(header.id, "key", e.target.value)}
                className="flex-1 border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Value"
                value={header.value}
                onChange={(e) => handleHeaderChange(header.id, "value", e.target.value)}
                className="flex-1 border border-gray-300 rounded-md p-2"
              />
              <button
                type="button"
                onClick={() => removeHeader(header.id)}
                className="text-red-500 hover:text-red-700"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addHeader}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            + Add Header
          </button>
        </div>
      )}
    </div>
  );
}