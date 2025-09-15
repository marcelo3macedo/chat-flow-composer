import { useEffect, useState } from "react";

import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";

type MessengerData = {
  recipientId: string;
  message: string;
};

export function MessengerModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();

  const [messengerData, setMessengerData] = useState<MessengerData>({
    recipientId: "",
    message: "",
  });

  useEffect(() => {
    if (props?.data?.messenger) {
      setMessengerData((props.data as any).messenger);
    }
  }, [props?.data?.messenger]);

  const handleDataChange = (field: keyof MessengerData, text: string) => {
    const newData = { ...messengerData, [field]: text };
    setMessengerData(newData);

    updateProps({
      data: {
        messenger: newData,
      },
    });
  };

  return (
    <Modal isOpen={open} title="Send Messenger Message" Icon={icons.MESSAGE}>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="recipient-id"
            className="block text-sm font-medium text-gray-700"
          >
            Recipient ID (PSID)
          </label>
          <input
            id="recipient-id"
            type="text"
            value={messengerData.recipientId}
            onChange={(e) => handleDataChange("recipientId", e.target.value)}
            placeholder="e.g., 1234567890"
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
            value={messengerData.message}
            onChange={(e) => handleDataChange("message", e.target.value)}
            placeholder="Enter the message to send..."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>
    </Modal>
  );
}
