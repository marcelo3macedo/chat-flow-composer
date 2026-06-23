import { FilmIcon, PaperClipIcon, PhotoIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";

type MediaType = "image" | "video" | "audio" | "document";

const MEDIA_TYPES: { value: MediaType; label: string; accept: string }[] = [
  { value: "image", label: "Imagem", accept: "image/*" },
  { value: "video", label: "Vídeo", accept: "video/*" },
  { value: "audio", label: "Áudio", accept: "audio/*" },
  { value: "document", label: "Documento", accept: ".pdf,.doc,.docx" },
];

const MEDIA_ICONS: Record<MediaType, typeof PhotoIcon> = {
  image: PhotoIcon,
  video: FilmIcon,
  audio: SpeakerWaveIcon,
  document: PaperClipIcon,
};

export function MediaModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();
  const [fileName, setFileName] = useState<string>("");
  const selectedType = (props?.data?.type || "image") as MediaType;
  const url = (props?.data?.url || "") as string;

  const currentType = MEDIA_TYPES.find((type) => type.value === selectedType) || MEDIA_TYPES[0];
  const CurrentIcon = MEDIA_ICONS[selectedType];

  const handleTypeChange = (type: MediaType) => {
    updateProps({
      data: {
        ...props?.data,
        type,
      },
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const fileUrl = URL.createObjectURL(file);

    updateProps({
      data: {
        ...props?.data,
        url: fileUrl,
      },
    });
  };

  return (
    <Modal
      isOpen={open}
      title="Mídia"
      Icon={icons.MEDIA}
      description="Envia uma imagem, vídeo, áudio ou documento para o usuário neste ponto do fluxo."
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="media-type" className="block text-sm font-medium text-gray-700">
            Tipo
          </label>
          <select
            id="media-type"
            value={selectedType}
            onChange={(e) => handleTypeChange(e.target.value as MediaType)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            {MEDIA_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-400 transition-colors">
          <CurrentIcon className="w-6 h-6 text-slate-500" />
          <span className="mt-2 text-sm text-slate-600">
            {fileName || `Selecionar ${currentType.label.toLowerCase()}`}
          </span>
          <input type="file" accept={currentType.accept} className="hidden" onChange={handleFileChange} />
        </label>

        {url && (
          <div className="flex flex-col items-center">
            {selectedType === "image" && (
              <img src={url} alt="Preview" className="max-w-full h-auto max-h-48 rounded-md shadow-md" />
            )}
            {selectedType === "video" && (
              <video src={url} controls className="max-w-full max-h-48 rounded-md shadow-md" />
            )}
            {selectedType === "audio" && <audio src={url} controls className="w-full" />}
            {selectedType === "document" && (
              <iframe src={url} title="Document preview" className="w-full h-64 border rounded-md" />
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
