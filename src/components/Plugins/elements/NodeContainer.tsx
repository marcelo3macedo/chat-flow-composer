import type { ReactNode } from "react";

interface NodeContainerProps {
  selected?: boolean;
  children: ReactNode;
}

export function NodeContainer({ selected, children }: NodeContainerProps) {
  return (
    <div
      className={`
        relative border-2 rounded-lg shadow-sm 
        p-2 flex items-center justify-center bg-gray-100
        ${selected ? "border-gray-500" : "border-gray-300"}
      `}
    >
      {children}
    </div>
  );
}
