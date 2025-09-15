import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

import type { ChangeEvent } from "react";

export function NodeSearch() {
    const searchInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onChange={searchInputChanges}
            />
            <MagnifyingGlassCircleIcon className="h-6 w-6 text-slate-300 absolute left-2 top-2.5 pointer-events-none" />
        </div>
    )
}