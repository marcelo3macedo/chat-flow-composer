import { useEffect, useState } from "react";

import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";

type MailData = {
  to: string;
  subject: string;
  message: string;
};

export function MailModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();

  const [mailData, setMailData] = useState<MailData>({
    to: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (props?.data?.mail) {
      setMailData((props.data as any).mail);
    }
  }, [props?.data?.mail]);

  const handleDataChange = (field: keyof MailData, text: string) => {
    const newData = { ...mailData, [field]: text };
    setMailData(newData);

    updateProps({
      data: {
        mail: newData,
      },
    });
  };

  return (
    <Modal isOpen={open} title="Send Email" Icon={icons.MESSAGE}>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="to"
            className="block text-sm font-medium text-gray-700"
          >
            To
          </label>
          <input
            id="to"
            type="email"
            value={mailData.to}
            onChange={(e) => handleDataChange("to", e.target.value)}
            placeholder="e.g., user@example.com"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={mailData.subject}
            onChange={(e) => handleDataChange("subject", e.target.value)}
            placeholder="Enter the subject..."
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
            value={mailData.message}
            onChange={(e) => handleDataChange("message", e.target.value)}
            placeholder="Enter the email body..."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>
    </Modal>
  );
}
