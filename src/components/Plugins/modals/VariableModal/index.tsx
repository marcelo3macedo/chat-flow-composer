import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";
import { NewVariable } from "./newVariable";
import { RemoveAction } from "./removeAction";

export function VariableModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();
  const variables = props?.data?.variables as any || [
    { id: '1', title: '', value: '' }
  ];

  const handleVariableChange = (id: string, field: 'title' | 'value', text: string) => {
    const newVariables = variables.map((variable: any) => 
      variable.id === id ? { ...variable, [field]: text } : variable
    );
    updateProps({
      data: {
        variables: newVariables
      },
    });
  };

  return (
    <Modal isOpen={open} title="Variables" Icon={icons.VARIABLES}>
      <div className="space-y-4">
        {variables.map((variable: any) => (
          <div key={variable.id} className="flex items-center space-x-2">
            <div className="flex-1">
              <label htmlFor={`title-${variable.id}`} className="block text-sm font-medium text-gray-700">Title</label>
              <input
                id={`title-${variable.id}`}
                type="text"
                value={variable.title}
                onChange={(e) => handleVariableChange(variable.id, 'title', e.target.value)}
                placeholder="Variable Title"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="flex-1">
              <label htmlFor={`value-${variable.id}`} className="block text-sm font-medium text-gray-700">Value</label>
              <input
                id={`value-${variable.id}`}
                type="text"
                value={variable.value}
                onChange={(e) => handleVariableChange(variable.id, 'value', e.target.value)}
                placeholder="Variable Value"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <RemoveAction variable={variable} />
          </div>
        ))}
        <NewVariable />
      </div>
    </Modal>
  );
}