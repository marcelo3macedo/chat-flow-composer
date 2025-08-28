import { GlobeAltIcon } from "@heroicons/react/20/solid";

import { BaseNode } from "./Base";


export function WebhookNode() {
  return (
    <BaseNode
      icon={GlobeAltIcon}
      type='webhook'
      title="Webhook"
      description="Receives an request"
      handleType="source-only"
    />
  );
}
