import { TagIcon } from "@heroicons/react/24/outline";

import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function QuestionNode(props: NodeProps) {
  const question = props.data?.question as string;
  const variableName = props.data?.variableName as string;

  return (
    <BaseNode
      props={props}
      type="question"
      icon={icons.QUESTION}
      title="Pergunta"
      description="Question the user"
      selected={props.selected}
    >
      {question ? (
        <p className="text-[8px] italic leading-relaxed text-gray-300 line-clamp-2 text-left p-1">
          “{question}”
        </p>
      ) : (
        <span className="text-[8px] italic text-gray-500 p-1">Nenhuma pergunta definida</span>
      )}
      {variableName && (
        <div className="mt-1 flex items-center gap-1 text-[8px] text-[#bd93f9]">
          <TagIcon className="h-2.5 w-2.5 shrink-0" />
          <span className="truncate">Salvar em: {variableName}</span>
        </div>
      )}
    </BaseNode>
  );
}
