import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import type { RequestData } from "./types/data";

export function Body(
    { data, onUpdate }: { data: RequestData, onUpdate: any }
) {
  const [showBody, setShowBody] = useState(false);

  return (    
    <div>
        <button
          type="button"
          onClick={() => setShowBody(!showBody)}
          className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          {showBody ? (
            <ChevronDownIcon className="h-4 w-4 mr-1" />
          ) : (
            <ChevronRightIcon className="h-4 w-4 mr-1" />
          )}
          Body
        </button>
        {showBody && (
          <textarea
            value={data.body}
            onChange={(e) => onUpdate({ body: e.target.value })}
            placeholder='Enter JSON or form data...'
            rows={6}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        )}
    </div>
  );
}