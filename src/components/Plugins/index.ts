import { coreNodeTypes } from "./categories/core";
import { eventsNodeTypes } from "./categories/events";
import { integrationsNodeTypes } from "./categories/integrations";
import { messengerNodeTypes } from "./categories/messengers";

export const nodeTypes = {
  ...coreNodeTypes,
  ...integrationsNodeTypes,
  ...eventsNodeTypes,
  ...messengerNodeTypes
};
