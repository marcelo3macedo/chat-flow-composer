import { InitialNode } from "./Initial";
import { MessageNode } from "./Message";
import { RequestNode } from "./Request";
import { VariablesNode } from "./Variables";

export const nodeTypes = {
  messageNode: MessageNode,
  requestNode: RequestNode,
  initialNode: InitialNode,
  variablesNode: VariablesNode
};