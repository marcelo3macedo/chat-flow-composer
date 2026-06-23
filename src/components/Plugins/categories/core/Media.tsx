import { PhotoIcon, SpeakerWaveIcon, DocumentIcon } from "@heroicons/react/24/outline";

import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function MediaNode(props: NodeProps) {
  const selectedType = (props.data?.type || 'image') as string;
  const url = props.data?.url as string;

  return (
    <BaseNode
      props={props}
      type="media"
      icon={icons.MEDIA}
      title="Mídia"
      description="Send media (image, video, etc.)"
      selected={props.selected}
    >
      {!url ? (
        <div className="flex flex-col items-center justify-center border border-dashed border-[#44475a] rounded-md p-2 bg-[#1e1f29]/50 text-gray-400">
          <PhotoIcon className="w-5 h-5 opacity-60 mb-0.5" />
          <span className="text-[9px]">Nenhuma mídia selecionada</span>
        </div>
      ) : selectedType === 'image' ? (
        <div className="relative overflow-hidden rounded-md border border-[#44475a] bg-black/20">
          <img src={url} className="w-full h-16 object-cover" alt="Image preview" />
          <div className="absolute bottom-1 right-1 bg-black/60 px-1 py-0.5 rounded text-[8px] text-gray-300">
            Imagem
          </div>
        </div>
      ) : selectedType === 'video' ? (
        <div className="relative overflow-hidden rounded-md border border-[#44475a] bg-black/20">
          <video src={url} className="w-full h-16 object-cover" muted />
          <div className="absolute bottom-1 right-1 bg-black/60 px-1 py-0.5 rounded text-[8px] text-gray-300">
            Vídeo
          </div>
        </div>
      ) : selectedType === 'audio' ? (
        <div className="flex items-center space-x-1.5 bg-[#1e1f29]/50 p-2 rounded-md border border-[#44475a]/40">
          <SpeakerWaveIcon className="w-3.5 h-3.5 text-[#8be9fd] shrink-0" />
          <span className="text-[9px] text-gray-400 italic">Arquivo de áudio</span>
        </div>
      ) : (
        <div className="flex items-center space-x-1.5 bg-[#1e1f29]/50 p-2 rounded-md border border-[#44475a]/40">
          <DocumentIcon className="w-3.5 h-3.5 text-[#ff79c6] shrink-0" />
          <span className="text-[9px] text-gray-400 italic">Documento anexado</span>
        </div>
      )}
    </BaseNode>
  );
}
