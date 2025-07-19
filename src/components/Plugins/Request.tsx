import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { BaseNode } from "./Base";

export function RequestNode() {
  return (
    <BaseNode
      icon={GlobeAltIcon}
      title="Request"
      description="Make a HTTP request"
    />
  );
}
