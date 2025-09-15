import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";
import { DocumentModal } from "./types/Document";
import { ImageMessageModal } from "./types/Image";
import { TextMessageModal } from "./types/Message";

import type { MessageType } from "./interfaces";

export function MessageModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();
  const selectedType = (props?.data?.type || 'text') as string;
  
  const selectTypeChange = (e: any) => {
    updateProps({
      data: {
        type: e.target.value
      },
    });
  }
  
  const renderFormFields = () => {
    switch (selectedType) {
      case "text":
        return <TextMessageModal />;
      case "audio":
      case "document":        
        return <DocumentModal selectedType={selectedType} />;
      case "image":
        return <ImageMessageModal />;
      default:
        return null;
    }
  };

  const messageTypes: { value: MessageType; label: string }[] = [
    { value: "text", label: "Text" },
    { value: "audio", label: "Audio" },
    { value: "document", label: "Document" },
    { value: "image", label: "Image" },
  ];

  return (
    <Modal isOpen={open} title="Message" Icon={icons.MESSAGE}>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={selectedType}
            onChange={selectTypeChange}
          >
            {messageTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          {renderFormFields()}
        </div>
      </form>
    </Modal>
  );
}