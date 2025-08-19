import { useMenuState } from "../../hooks/useMenuState";
import type { BaseNodeProps } from "../../interfaces/Plugin";

export function BaseInitialNode({
  icon: Icon,
  title,
  description,
}: BaseNodeProps) {
  const { initialMenu } = useMenuState()
  const onClick = () => {
    initialMenu()
  }

  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <div className="
        relative border border-gray-700  border-dashed rounded-lg shadow-sm 
        p-2 flex items-center justify-center
      ">
        <div className="p-2 rounded-md">
          <Icon className="h-8 w-8 text-gray-700" />
        </div>
      </div>

      <p className="text-sm font-semibold text-gray-800">{title}</p>
      <p className="text-xs text-gray-500 text-center leading-tight">{description}</p>
    </div>
  );
}
