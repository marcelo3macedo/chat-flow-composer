import { InitialNode } from "./Initial";
import { ManuallyNode } from "./Manually";
import { MessageNode } from "./Message";
import { RequestNode } from "./Request";
import { VariablesNode } from "./Variables";
import { WebhookNode } from "./Webhook";

export const nodeTypes = {
  manually: ManuallyNode,
  message: MessageNode,
  request: RequestNode,
  initial: InitialNode,
  variables: VariablesNode,
  webhook: WebhookNode
};