import { ChatBubbleLeftEllipsisIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { GlobeAltIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import type { IconComponent, IconKeys } from "../../interfaces/Node";

export const icons: Record<IconKeys, IconComponent> = {
  MESSAGE: ChatBubbleLeftEllipsisIcon,
  REQUEST: GlobeAltIcon,
  VARIABLES: AdjustmentsHorizontalIcon
};

export function getIconByName(name: string): IconComponent {
  const key = name.toUpperCase() as IconKeys;
  return icons[key] || ChevronRightIcon;
}