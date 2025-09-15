import { PaperClipIcon } from "@heroicons/react/20/solid";
import { SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import useModalStore from "@Composer/store/flow/modal";

export function DocumentModal({ selectedType }: { selectedType: string }) {
  const { props, updateProps } = useModalStore();
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  const isAudio = selectedType === "audio";
  const fileIcon = isAudio ? (
    <SpeakerWaveIcon className="w-6 h-6 text-slate-500" />
  ) : (
    <PaperClipIcon className="w-6 h-6 text-slate-500" />
  );
  const fileLabel = isAudio ? "Select Audio" : "Select Document";
  const acceptedFormats = isAudio ? "audio/*" : ".pdf,.doc,.docx";

  const url = (props?.data?.url || "") as string;

  const updateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMediaFile(file);

    const url = URL.createObjectURL(file);
    updateProps({
      data: {
        ...props?.data,
        url,
      },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-400 transition-colors">
        {fileIcon}
        <span className="ml-2 text-sm text-slate-600">
          {mediaFile ? mediaFile.name : fileLabel}
        </span>
        <input
          type="file"
          accept={acceptedFormats}
          className="hidden"
          onChange={updateHandler}
        />
      </label>

      {url && (
        <div className="mt-2">
          {isAudio ? (
            <audio controls className="w-full">
              <source src={url} />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <iframe
              src={url}
              title="Document preview"
              className="w-full h-64 border rounded-md"
            />
          )}
        </div>
      )}
    </div>
  );
}
