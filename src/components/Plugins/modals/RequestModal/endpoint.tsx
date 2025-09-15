import type { RequestData } from "./types/data";

export function Endpoint(
    { data, onUpdate }: { data: RequestData, onUpdate: any }
) {
  return (
    <div>
        <div>
          <label className="block text-sm font-medium text-gray-700">URL</label>
          <input
            type="text"
            value={data.url}
            onChange={(e) => onUpdate({ url: e.target.value })}
            placeholder="https://api.example.com/data"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            value={data.type}
            onChange={(e) => onUpdate({ type: e.target.value as RequestData["type"] })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
            <option>PATCH</option>
          </select>
        </div>
    </div>
  );
}