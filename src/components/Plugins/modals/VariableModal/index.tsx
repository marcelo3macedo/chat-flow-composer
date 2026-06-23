import { 
  PlusIcon, 
  TrashIcon, 
  InformationCircleIcon 
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";

interface VariableItem {
  id: string;
  title: string;
  value: string;
}

export function VariableModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();
  const [variables, setVariables] = useState<VariableItem[]>([]);

  // Initialize variables state when modal opens
  useEffect(() => {
    if (open && props?.data) {
      const rawVariables = props.data.variables as VariableItem[] | undefined;
      if (rawVariables && rawVariables.length > 0) {
        setVariables(rawVariables);
      } else {
        // Start with one empty variable row
        setVariables([
          { id: `var_${Date.now()}`, title: '', value: '' }
        ]);
      }
    }
  }, [open, props?.data]);

  const syncToStore = (items: VariableItem[]) => {
    updateProps({
      data: {
        ...props?.data,
        variables: items
      },
    });
  };

  const handleVariableChange = (id: string, field: 'title' | 'value', text: string) => {
    const updated = variables.map((variable) => {
      if (variable.id === id) {
        // Auto-sanitize variable title to keep only alphanumeric + underscore
        const val = field === 'title' ? text.replace(/[^a-zA-Z0-9_]/g, '') : text;
        return { ...variable, [field]: val };
      }
      return variable;
    });
    setVariables(updated);
    syncToStore(updated);
  };

  const handleAddVariable = () => {
    const newItems = [
      ...variables,
      { id: `var_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, title: '', value: '' }
    ];
    setVariables(newItems);
    syncToStore(newItems);
  };

  const handleRemoveVariable = (id: string) => {
    const newItems = variables.filter(v => v.id !== id);
    setVariables(newItems);
    syncToStore(newItems);
  };

  return (
    <Modal
      isOpen={open}
      title="Definir Variáveis"
      Icon={icons.VARIABLES}
      description="Crie e gerencie variáveis personalizadas para armazenar informações e reutilizá-las no fluxo."
    >
      <div className="space-y-6 py-2">
        {/* Lista de Variáveis */}
        <div className="space-y-3">
          {/* Cabeçalho de Colunas */}
          {variables.length > 0 && (
            <div className="grid grid-cols-12 gap-3 text-xs font-semibold text-gray-500 px-1.5 uppercase tracking-wider">
              <span className="col-span-5">Identificador (Nome)</span>
              <span className="col-span-6">Valor da Variável</span>
              <span className="col-span-1"></span>
            </div>
          )}

          <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-1">
            {variables.length === 0 ? (
              <div className="text-center py-8 border border-dashed border-gray-200 rounded-xl text-sm text-gray-500 bg-gray-50/20">
                Nenhuma variável cadastrada. Clique no botão abaixo para criar uma.
              </div>
            ) : (
              variables.map((variable) => (
                <div key={variable.id} className="grid grid-cols-12 gap-3 items-center p-2.5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-colors">
                  {/* Nome da Variável com chaves visuais */}
                  <div className="col-span-5 relative rounded-lg shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                      <span className="text-gray-400 font-mono font-bold text-xs select-none">{"{{"}</span>
                    </div>
                    <input
                      id={`title-${variable.id}`}
                      type="text"
                      value={variable.title}
                      onChange={(e) => handleVariableChange(variable.id, 'title', e.target.value)}
                      placeholder="nome_variavel"
                      className="block w-full pl-6 pr-6 border border-gray-300 rounded-lg p-2 text-xs font-mono text-blue-600 font-semibold focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                    <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
                      <span className="text-gray-400 font-mono font-bold text-xs select-none">{"}}"}</span>
                    </div>
                  </div>

                  {/* Valor da Variável */}
                  <div className="col-span-6">
                    <input
                      id={`value-${variable.id}`}
                      type="text"
                      value={variable.value}
                      onChange={(e) => handleVariableChange(variable.id, 'value', e.target.value)}
                      placeholder="Ex: Valor inicial ou texto"
                      className="block w-full border border-gray-300 rounded-lg p-2 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* Botão de Excluir */}
                  <div className="col-span-1 flex justify-center">
                    <button
                      type="button"
                      onClick={() => handleRemoveVariable(variable.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      title="Excluir Variável"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Botão de Adicionar Variável */}
        <button
          type="button"
          onClick={handleAddVariable}
          className="w-full py-2.5 border-2 border-dashed border-gray-200 hover:border-blue-400 hover:bg-blue-50/20 text-gray-500 hover:text-blue-600 rounded-xl font-semibold text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm"
        >
          <PlusIcon className="h-4 w-4" />
          Adicionar Variável
        </button>

        {/* Banner Informativo */}
        <div className="flex gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 shadow-sm text-sm text-blue-700 leading-relaxed">
          <InformationCircleIcon className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Como usar variáveis no chatbot?</h3>
            <p>
              Defina o nome de identificação da variável (à esquerda) e seu valor padrão (à direita).
              Para exibir esses valores em outros nós de mensagens ou em regras condicionais, escreva o 
              nome entre chaves duplas: <strong className="font-mono text-indigo-600 bg-white/80 px-1 py-0.5 rounded border border-indigo-100">{"{{nome_da_variavel}}"}</strong>.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}