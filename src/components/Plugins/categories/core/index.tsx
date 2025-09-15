import { InitialNode } from "./Initial";
import { MessageNode } from "./Message";
import { RequestNode } from "./Request";
import { VariablesNode } from "./Variables";

export const coreNodeTypes = {
  initial: InitialNode,
  message: MessageNode,
  variables: VariablesNode,
  request: RequestNode
};