import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";
import { GlobeAltIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import type { IconComponent, IconKeys } from "../../interfaces/Node";


export const icons: Record<IconKeys, IconComponent> = {
  MESSAGE: ChatBubbleLeftEllipsisIcon,
  REQUEST: GlobeAltIcon,
  VARIABLES: AdjustmentsHorizontalIcon
};
