import { useEffect, useState } from "react";

import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";

type WhatsAppData = {
  phoneNumber: string;
  message: string;
};

export function WhatsappModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();
  
  const [whatsappData, setWhatsappData] = useState<WhatsAppData>({
    phoneNumber: '',
    message: ''
  });

  useEffect(() => {
    if (props?.data?.whatsapp) {
      setWhatsappData((props.data as any).whatsapp);
    }
  }, [props?.data?.whatsapp]);

  const handleDataChange = (field: keyof WhatsAppData, text: string) => {
    const newData = { ...whatsappData, [field]: text };
    setWhatsappData(newData);
    
    updateProps({
      data: {
        whatsapp: newData,
      },
    });
  };

  return (
    <Modal isOpen={open} title="Send WhatsApp Message" Icon={icons.MESSAGE}>
      <div className="space-y-4">
        <div>
          <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone-number"
            type="text"
            value={whatsappData.phoneNumber}
            onChange={(e) => handleDataChange('phoneNumber', e.target.value)}
            placeholder="e.g., +15551234567"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={whatsappData.message}
            onChange={(e) => handleDataChange('message', e.target.value)}
            placeholder="Enter the message to send..."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>
    </Modal>
  );
}