import { useMenuState } from "@Composer/hooks/useMenuState";
import type { BaseNodeProps } from "@Composer/interfaces/Plugin";

export function BaseInitialNode({
  icon: Icon,
  title,
  description,
}: BaseNodeProps) {
  const { initialMenu } = useMenuState();
  const onClick = () => {
    initialMenu();
  };

  return (
    <div 
      onClick={onClick}
      className="relative flex flex-col w-[180px] rounded-lg border border-dashed border-[#44475a]/40 bg-[#1e1f29]/30 text-[#f8f8f2] shadow-sm transition-all duration-200 cursor-pointer hover:border-[#6272a4]/75"
    >
      {/* Header: Icon + Node Type */}
      <div className="flex items-center gap-1 border-b border-dashed border-[#44475a]/30 bg-gray-500/5 px-2 py-0.5 rounded-t-lg">
        <Icon className="h-3.5 w-3.5 text-gray-500 shrink-0" />
        <span className="text-[8.5px] font-semibold uppercase tracking-wider text-gray-500">
          {title}
        </span>
      </div>

      {/* Content area */}
      <div className="px-2 py-1.5 bg-[#282a36]/20 rounded-b-lg flex flex-col justify-center min-h-[2.5rem]">
        <p className="text-[9px] leading-normal text-gray-500 text-left">
          {description}
        </p>
      </div>
    </div>
  );
}
