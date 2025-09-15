import { useEffect, useState } from "react";

import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";

type InstagramData = {
  recipientId: string;
  message: string;
};

export function InstagramModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();

  const [instagramData, setInstagramData] = useState<InstagramData>({
    recipientId: "",
    message: "",
  });

  useEffect(() => {
    if (props?.data?.instagram) {
      setInstagramData((props.data as any).instagram);
    }
  }, [props?.data?.instagram]);

  const handleDataChange = (field: keyof InstagramData, text: string) => {
    const newData = { ...instagramData, [field]: text };
    setInstagramData(newData);

    updateProps({
      data: {
        instagram: newData,
      },
    });
  };

  return (
    <Modal isOpen={open} title="Send Instagram Message" Icon={icons.MESSAGE}>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="recipient-id"
            className="block text-sm font-medium text-gray-700"
          >
            Recipient ID / Username
          </label>
          <input
            id="recipient-id"
            type="text"
            value={instagramData.recipientId}
            onChange={(e) => handleDataChange("recipientId", e.target.value)}
            placeholder="e.g., 1234567890 or @username"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={instagramData.message}
            onChange={(e) => handleDataChange("message", e.target.value)}
            placeholder="Enter the message to send..."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>
    </Modal>
  );
}
