import { ChatBubbleLeftEllipsisIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { 
  GlobeAltIcon, 
  AdjustmentsHorizontalIcon,
  QuestionMarkCircleIcon,
  ArrowsRightLeftIcon,
  PhoneArrowUpRightIcon,
  PhotoIcon
} from "@heroicons/react/24/outline";

import type { IconComponent, IconKeys } from "../../interfaces/Node";

export const icons: Record<IconKeys, IconComponent> = {
  MESSAGE: ChatBubbleLeftEllipsisIcon,
  REQUEST: GlobeAltIcon,
  VARIABLES: AdjustmentsHorizontalIcon,
  QUESTION: QuestionMarkCircleIcon,
  CONDITION: ArrowsRightLeftIcon,
  TRANSFER_OPERATOR: PhoneArrowUpRightIcon,
  MEDIA: PhotoIcon
};

export function getIconByName(name: string): IconComponent {
  const key = name.toUpperCase().replace(/ /g, '_') as IconKeys;
  return icons[key] || ChevronRightIcon;
}