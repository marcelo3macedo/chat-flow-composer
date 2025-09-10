import { ChevronRightIcon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";

import { Modal } from "./Base";

// Defina os tipos para os dados da requisição
type RequestData = {
  url: string;
  type: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers: { id: string; key: string; value: string }[];
  body: string;
  resultVariable: string; // <-- Novo campo para o nome da variável
};

export function RequestModal({ open }: ModalActions) {
  const [requestData, setRequestData] = useState<RequestData>({
    url: "",
    type: "GET",
    headers: [{ id: Date.now().toString(), key: "", value: "" }],
    body: "",
    resultVariable: "", // <-- Inicialize o novo campo
  });
  const [showHeaders, setShowHeaders] = useState(false);
  const [showBody, setShowBody] = useState(false);

  const handleHeaderChange = (id: string, field: "key" | "value", text: string) => {
    setRequestData((prevData) => ({
      ...prevData,
      headers: prevData.headers.map((header) =>
        header.id === id ? { ...header, [field]: text } : header
      ),
    }));
  };

  const addHeader = () => {
    setRequestData((prevData) => ({
      ...prevData,
      headers: [...prevData.headers, { id: Date.now().toString(), key: "", value: "" }],
    }));
  };

  const removeHeader = (id: string) => {
    setRequestData((prevData) => ({
      ...prevData,
      headers: prevData.headers.filter((header) => header.id !== id),
    }));
  };

  return (
    <Modal isOpen={open} title="Request" Icon={icons.REQUEST}>
      <form className="space-y-4">
        {/* Seção de URL e Tipo */}
        <div>
          <label className="block text-sm font-medium text-gray-700">URL</label>
          <input
            type="text"
            value={requestData.url}
            onChange={(e) => setRequestData({ ...requestData, url: e.target.value })}
            placeholder="https://api.example.com/data"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            value={requestData.type}
            onChange={(e) => setRequestData({ ...requestData, type: e.target.value as RequestData["type"] })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
            <option>PATCH</option>
          </select>
        </div>

        {/* Seção de Headers */}
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
              {requestData.headers.map((header) => (
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

        {/* Seção de Body */}
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
              value={requestData.body}
              onChange={(e) => setRequestData({ ...requestData, body: e.target.value })}
              placeholder='Enter JSON or form data...'
              rows={6}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          )}
        </div>

        {/* Campo para o nome da variável de resultado */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Save result to variable</label>
          <input
            type="text"
            value={requestData.resultVariable}
            onChange={(e) => setRequestData({ ...requestData, resultVariable: e.target.value })}
            placeholder="e.g., apiResponse"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </form>
    </Modal>
  );
}