import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";

export function QuestionModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();
  const question = (props?.data?.question || '') as string;
  const variableName = (props?.data?.variableName || '') as string;

  const handleChange = (field: 'question' | 'variableName', value: string) => {
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
      title="Pergunta"
      Icon={icons.QUESTION}
      description="Faz uma pergunta ao usuário e pausa o fluxo até ele responder. A resposta pode ser guardada em uma variável e reaproveitada depois."
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">
            Pergunta
          </label>
          <textarea
            id="question"
            rows={3}
            value={question}
            onChange={(e) => handleChange('question', e.target.value)}
            placeholder="Ex: Qual é o seu nome?"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="variable-name" className="block text-sm font-medium text-gray-700">
            Salvar resposta em
          </label>
          <input
            id="variable-name"
            type="text"
            value={variableName}
            onChange={(e) => handleChange('variableName', e.target.value)}
            placeholder="Ex: nome_cliente"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          <p className="mt-1 text-xs text-gray-500">
            Em outras caixinhas, use {'{{'}{variableName || 'nome_da_variavel'}{'}}'} para se referir a essa resposta.
          </p>
        </div>
      </div>
    </Modal>
  );
}
