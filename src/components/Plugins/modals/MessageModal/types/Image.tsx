import { PhotoIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import useModalStore from "@Composer/store/flow/modal";

export function ImageMessageModal() {
    const { props, updateProps } = useModalStore();
    const [mediaFile, setMediaFile] = useState<File | null>(null);
    const url = (props?.data.url || '') as string;
    
    const updateImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setMediaFile(file);

        const url = URL.createObjectURL(file);
        updateProps({
            data: {
                ...props?.data,
                url
            },
        });
    };

    return (
        <>
        <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-400 transition-colors">
            <PhotoIcon className="w-6 h-6 text-slate-500" />
            <span className="mt-2 text-sm text-slate-600">
                {mediaFile ? mediaFile.name : "Select Image"}
            </span>
            <input type="file" accept="image/*" className="hidden" onChange={updateImageHandler} />
        </label>
        {url && (
            <div className="mt-4 flex flex-col items-center">
            <img src={url} alt="Preview" className="max-w-full h-auto max-h-48 rounded-md shadow-md" />
            </div>
        )}
        </>
    );
}