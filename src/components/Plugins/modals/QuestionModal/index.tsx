import { InformationCircleIcon } from "@heroicons/react/24/outline";

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
      title="Configuração de Pergunta"
      Icon={icons.QUESTION}
      description="Faça uma pergunta ao usuário. O fluxo pausará aguardando a resposta, que será guardada em uma variável."
    >
      <div className="space-y-6 py-2">
        {/* Campo da Pergunta */}
        <div>
          <label htmlFor="question" className="block text-sm font-semibold text-gray-850 mb-1.5">
            Texto da Pergunta
          </label>
          <textarea
            id="question"
            rows={3}
            value={question}
            onChange={(e) => handleChange('question', e.target.value)}
            placeholder="Digite a pergunta (Ex: Qual é o seu e-mail?)"
            className="block w-full border border-gray-300 rounded-xl shadow-sm p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
        </div>

        {/* Campo da Variável com chaves visuais */}
        <div>
          <label htmlFor="variable-name" className="block text-sm font-semibold text-gray-850 mb-1.5">
            Salvar Resposta em uma Variável
          </label>
          <div className="relative rounded-xl shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <span className="text-gray-400 font-mono font-bold text-sm select-none">{"{{"}</span>
            </div>
            <input
              id="variable-name"
              type="text"
              value={variableName}
              onChange={(e) => {
                // remove spaces and special characters to keep variable name valid
                const sanitized = e.target.value.replace(/[^a-zA-Z0-9_]/g, '');
                handleChange('variableName', sanitized);
              }}
              placeholder="Ex: email_cliente"
              className="block w-full pl-9 pr-9 border border-gray-300 rounded-xl p-3 text-sm font-mono text-blue-600 font-semibold focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
              <span className="text-gray-400 font-mono font-bold text-sm select-none">{"}}"}</span>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            Use apenas letras, números e underline (_). Espaços e caracteres especiais são removidos.
          </p>
        </div>

        {/* Banner Informativo sobre Variáveis */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 shadow-sm">
          <div className="flex gap-3">
            <InformationCircleIcon className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-sm">
              <h3 className="font-semibold text-blue-900 mb-1">Como funcionam as Variáveis de Resposta?</h3>
              <p className="text-blue-700 leading-relaxed">
                Ao salvar a resposta do cliente em uma variável, você poderá exibir ou utilizar esse valor
                em qualquer outra caixinha de mensagem ou condição inserindo o nome entre chaves duplas:
              </p>
              
              {/* Exemplo Visual em tempo real */}
              <div className="mt-3 bg-white border border-blue-200 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-700 font-mono">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-semibold font-sans">Variável:</span>
                  <span className="text-blue-600 font-bold">{variableName || 'nome_variavel'}</span>
                </div>
                <div className="hidden sm:block text-gray-400">➔</div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded font-semibold font-sans">Uso no fluxo:</span>
                  <span className="text-slate-600">"Olá, <strong className="text-indigo-600 font-bold">{"{{"}{variableName || 'nome_variavel'}{"}}"}</strong>!"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
