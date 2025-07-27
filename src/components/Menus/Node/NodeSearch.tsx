import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

export function NodeSearch() {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Pesquisar..."
                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <MagnifyingGlassCircleIcon className="h-6 w-6 text-slate-300 absolute left-2 top-2.5 pointer-events-none" />
        </div>
    )
}