import { InformationCircleIcon } from "@heroicons/react/24/outline";

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
      title="Transferir para Atendente"
      Icon={icons.TRANSFER_OPERATOR}
      description="Este bloco encerra o fluxo automatizado temporariamente e direciona o cliente para a fila de atendimento humano. Você pode selecionar o departamento de destino e definir uma mensagem de boas-vindas ou instrução enquanto o cliente aguarda o atendente."
    >
      <div className="space-y-6 py-2">
        {/* Fila/Departamento */}
        <div>
          <label htmlFor="department" className="block text-sm font-semibold text-gray-800 mb-1.5">
            Departamento / Fila de Atendimento
          </label>
          <input
            id="department"
            type="text"
            value={department}
            onChange={(e) => handleChange('department', e.target.value)}
            placeholder="Ex: Comercial, Suporte Técnico, Financeiro"
            className="block w-full border border-gray-300 rounded-xl shadow-sm p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
        </div>

        {/* Mensagem de Espera */}
        <div>
          <label htmlFor="note" className="block text-sm font-semibold text-gray-800 mb-1.5">
            Mensagem para o cliente enquanto aguarda
          </label>
          <textarea
            id="note"
            rows={3}
            value={note}
            onChange={(e) => handleChange('note', e.target.value)}
            placeholder="Ex: Um momento, por favor. Já estamos transferindo você para um de nossos especialistas."
            className="block w-full border border-gray-300 rounded-xl shadow-sm p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
        </div>
      </div>
    </Modal>
  );
}
