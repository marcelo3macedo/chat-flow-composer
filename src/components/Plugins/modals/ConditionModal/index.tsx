import { 
  TrashIcon, 
  PlusIcon, 
  InformationCircleIcon 
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

import { CONDITION_OPERATORS } from "@Composer/components/Plugins/categories/core/conditionOperators";
import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";

interface ConditionItem {
  id: string;
  variable: string;
  operator: string;
  value: string;
}

export function ConditionModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();
  const [conditions, setConditions] = useState<ConditionItem[]>([]);

  // Sync internal state when modal opens or props change
  useEffect(() => {
    if (open && props?.data) {
      const rawConditions = props.data.conditions as ConditionItem[] | undefined;
      if (rawConditions && rawConditions.length > 0) {
        setConditions(rawConditions);
      } else if (props.data.variable) {
        // Fallback for backwards compatibility with single condition nodes
        setConditions([
          {
            id: "cond-0",
            variable: (props.data.variable || '') as string,
            operator: (props.data.operator || 'equals') as string,
            value: (props.data.value || '') as string,
          }
        ]);
      } else {
        // Start with one empty condition if node is completely new
        setConditions([
          {
            id: `cond_${Date.now()}`,
            variable: '',
            operator: 'equals',
            value: '',
          }
        ]);
      }
    }
  }, [open, props?.data]);

  const syncToStore = (items: ConditionItem[]) => {
    updateProps({
      data: {
        ...props?.data,
        conditions: items,
        // Keep root values updated for backward compatibility (first condition)
        variable: items[0]?.variable || '',
        operator: items[0]?.operator || 'equals',
        value: items[0]?.value || '',
      },
    });
  };

  const handleAddCondition = () => {
    const newItems = [
      ...conditions,
      {
        id: `cond_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        variable: '',
        operator: 'equals',
        value: '',
      }
    ];
    setConditions(newItems);
    syncToStore(newItems);
  };

  const handleRemoveCondition = (id: string) => {
    const newItems = conditions.filter(c => c.id !== id);
    setConditions(newItems);
    syncToStore(newItems);
  };

  const handleFieldChange = (id: string, field: keyof ConditionItem, val: string) => {
    const newItems = conditions.map(c => {
      if (c.id === id) {
        return { ...c, [field]: val };
      }
      return c;
    });
    setConditions(newItems);
    syncToStore(newItems);
  };

  return (
    <Modal
      isOpen={open}
      title="Configuração de Condições"
      Icon={icons.CONDITION}
      description="Direcione o fluxo por múltiplos caminhos diferentes. Cada condição cadastrada criará uma saída exclusiva no nó."
    >
      <div className="space-y-6 py-2">
        {/* Banner Informativo */}
        <div className="flex gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 shadow-sm text-sm text-blue-700 leading-relaxed">
          <InformationCircleIcon className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Como funcionam as saídas condicionais?</h3>
            <p>
              Você pode cadastrar várias regras de verificação. Cada regra adicionada criará um 
              <strong> ponto de saída (caminho)</strong> no lado direito do nó. O fluxo de conversa 
              seguirá a primeira condição que for verdadeira. Caso nenhuma seja atendida, 
              o fluxo seguirá automaticamente pelo caminho padrão <strong>"Senão (caso nenhuma)"</strong>.
            </p>
          </div>
        </div>

        {/* Lista de Condições */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-800 font-sans">Regras de Validação</span>
            <button
              type="button"
              onClick={handleAddCondition}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all"
            >
              <PlusIcon className="h-4 w-4" />
              Nova Condição
            </button>
          </div>

          {conditions.length === 0 ? (
            <div className="text-center py-6 border border-dashed border-gray-200 rounded-xl text-sm text-gray-500">
              Nenhuma condição cadastrada. Clique em "Nova Condição" para adicionar.
            </div>
          ) : (
            <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-1">
              {conditions.map((cond, index) => (
                <div key={cond.id} className="relative p-4 border border-gray-200 rounded-xl bg-gray-50/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-800 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Caminho {index + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveCondition(cond.id)}
                      className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      title="Excluir Condição"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Variável */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Se a Variável
                      </label>
                      <input
                        type="text"
                        value={cond.variable}
                        onChange={(e) => handleFieldChange(cond.id, 'variable', e.target.value)}
                        placeholder="Ex: {{idade}}"
                        className="w-full border border-gray-300 rounded-lg p-2 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    {/* Operador */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        For
                      </label>
                      <select
                        value={cond.operator}
                        onChange={(e) => handleFieldChange(cond.id, 'operator', e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-2 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        {CONDITION_OPERATORS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Valor */}
                    {cond.operator !== 'exists' && (
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          O Valor
                        </label>
                        <input
                          type="text"
                          value={cond.value}
                          onChange={(e) => handleFieldChange(cond.id, 'value', e.target.value)}
                          placeholder="Ex: 18"
                          className="w-full border border-gray-300 rounded-lg p-2 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
