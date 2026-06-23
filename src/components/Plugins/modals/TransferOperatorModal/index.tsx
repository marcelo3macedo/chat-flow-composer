import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";

export function TransferOperatorModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();
  const department = (props?.data?.department || '') as string;
  const note = (props?.data?.note || '') as string;

  const handleChange = (field: 'department' | 'note', value: string) => {
    updateProps({
      data: {
        ...props?.data,
        [field]: value,
      },
    });
  };

  return (
    <Modal
      isOpen={open}
      title="Transferir operador"
      Icon={icons.TRANSFER_OPERATOR}
      description="Encaminha a conversa para um atendente humano, encerrando a automação a partir deste ponto."
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">
            Departamento/Fila
          </label>
          <input
            id="department"
            type="text"
            value={department}
            onChange={(e) => handleChange('department', e.target.value)}
            placeholder="Ex: Suporte técnico"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="note" className="block text-sm font-medium text-gray-700">
            Mensagem para o cliente enquanto espera
          </label>
          <textarea
            id="note"
            rows={3}
            value={note}
            onChange={(e) => handleChange('note', e.target.value)}
            placeholder="Ex: Já estamos te transferindo para um atendente, aguarde um instante."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>
    </Modal>
  );
}
