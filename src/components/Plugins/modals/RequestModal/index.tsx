import { useState, useEffect } from "react";

import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";
import { Body } from "./body";
import { initialObj } from "./constants/initial";
import { Endpoint } from "./endpoint";
import { Header } from "./header";
import { SaveFields } from "./saveField";

import type { RequestData } from "./types/data";

export function RequestModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();
  const [requestData, setRequestData] = useState<RequestData>(initialObj);

  useEffect(() => {
    if (props?.request) {
      setRequestData(props.request);
    }
  }, [props?.request]);

  const handleUpdate = (updates: Partial<RequestData>) => {
    setRequestData((prevData) => {
      const newData = { ...prevData, ...updates };
      updateProps({ request: newData });
      return newData;
    });
  };

  return (
    <Modal isOpen={open} title="Request" Icon={icons.REQUEST}>
      <form className="space-y-4">
        <Endpoint
          data={requestData}
          onUpdate={handleUpdate}
        />
        <Header
          data={requestData}
          onUpdate={handleUpdate}
        />
        <Body
          data={requestData}
          onUpdate={handleUpdate}
        />
        <SaveFields
          data={requestData}
          onUpdate={handleUpdate}
        />
      </form>
    </Modal>
  );
}