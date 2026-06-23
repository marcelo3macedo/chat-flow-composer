import { ConditionNode } from "./Condition";
import { InitialNode } from "./Initial";
import { MediaNode } from "./Media";
import { MessageNode } from "./Message";
import { QuestionNode } from "./Question";
import { RequestNode } from "./Request";
import { TransferOperatorNode } from "./TransferOperator";
import { VariablesNode } from "./Variables";

export const coreNodeTypes = {
  initial: InitialNode,
  message: MessageNode,
  variables: VariablesNode,
  request: RequestNode,
  question: QuestionNode,
  condition: ConditionNode,
  transfer_operator: TransferOperatorNode,
  media: MediaNode
};