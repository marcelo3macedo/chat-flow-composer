import { useEffect, useState } from "react";

import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";

type TelegramData = {
  chatId: string;
  message: string;
};

export function TelegramModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();

  const [telegramData, setTelegramData] = useState<TelegramData>({
    chatId: "",
    message: "",
  });

  useEffect(() => {
    if (props?.data?.telegram) {
      setTelegramData((props.data as any).telegram);
    }
  }, [props?.data?.telegram]);

  const handleDataChange = (field: keyof TelegramData, text: string) => {
    const newData = { ...telegramData, [field]: text };
    setTelegramData(newData);

    updateProps({
      data: {
        telegram: newData,
      },
    });
  };

  return (
    <Modal isOpen={open} title="Send Telegram Message" Icon={icons.MESSAGE}>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="chat-id"
            className="block text-sm font-medium text-gray-700"
          >
            Chat ID
          </label>
          <input
            id="chat-id"
            type="text"
            value={telegramData.chatId}
            onChange={(e) => handleDataChange("chatId", e.target.value)}
            placeholder="e.g., 123456789"
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
            value={telegramData.message}
            onChange={(e) => handleDataChange("message", e.target.value)}
            placeholder="Enter the message to send..."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>
    </Modal>
  );
}
