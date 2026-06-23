import { PhotoIcon, SpeakerWaveIcon, DocumentIcon } from "@heroicons/react/24/outline";

import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function MessageNode(props: NodeProps) {
  const selectedType = (props.data?.type || 'text') as string;
  const imageUrl = props.data?.url as string;
  const textValue = props.data?.value as string;

  return (
    <BaseNode
      props={props}
      icon={icons.MESSAGE}
      type="message"
      title="Mensagem"
      description="Sends a message"
      selected={props.selected}
    >
      {selectedType === 'image' ? (
        imageUrl ? (
          <div className="relative overflow-hidden rounded-md border border-[#44475a] bg-black/20">
            <img src={imageUrl} className="w-full h-16 object-cover" alt="Image preview" />
            <div className="absolute bottom-1 right-1 bg-black/60 px-1 py-0.5 rounded text-[8px] text-gray-300">
              Imagem
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center border border-dashed border-[#44475a] rounded-md p-2 bg-[#1e1f29]/50 text-gray-400">
            <PhotoIcon className="w-5 h-5 opacity-60 mb-0.5" />
            <span className="text-[9px]">Nenhuma imagem</span>
          </div>
        )
      ) : selectedType === 'audio' ? (
        <div className="flex items-center space-x-1.5 bg-[#1e1f29]/50 p-2 rounded-md border border-[#44475a]/40">
          <SpeakerWaveIcon className="w-3.5 h-3.5 text-[#8be9fd] shrink-0" />
          <span className="text-[9px] text-gray-400 italic">Mensagem de áudio</span>
        </div>
      ) : selectedType === 'document' ? (
        <div className="flex items-center space-x-1.5 bg-[#1e1f29]/50 p-2 rounded-md border border-[#44475a]/40">
          <DocumentIcon className="w-3.5 h-3.5 text-[#ff79c6] shrink-0" />
          <span className="text-[9px] text-gray-400 italic">Documento anexado</span>
        </div>
      ) : (
        <div className="text-[8px] p-1 leading-relaxed text-gray-300 line-clamp-3 text-left">
          {textValue ? (
            <span className="whitespace-pre-wrap">{textValue}</span>
          ) : (
            <span className="italic text-gray-500">Sem conteúdo de texto...</span>
          )}
        </div>
      )}
    </BaseNode>
  );
}
