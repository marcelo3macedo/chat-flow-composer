import { CONDITION_OPERATORS } from "@Composer/components/Plugins/categories/core/conditionOperators";
import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";

export function ConditionModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();
  const variable = (props?.data?.variable || '') as string;
  const operator = (props?.data?.operator || 'equals') as string;
  const value = (props?.data?.value || '') as string;

  const handleChange = (field: 'variable' | 'operator' | 'value', fieldValue: string) => {
    updateProps({
      data: {
        ...props?.data,
        [field]: fieldValue,
      },
    });
  };

  return (
    <Modal
      isOpen={open}
      title="Condição"
      Icon={icons.CONDITION}
      description="Direciona o fluxo por dois caminhos diferentes (Verdadeiro ou Falso), de acordo com o resultado desta condição."
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="variable" className="block text-sm font-medium text-gray-700">
            Variável
          </label>
          <input
            id="variable"
            type="text"
            value={variable}
            onChange={(e) => handleChange('variable', e.target.value)}
            placeholder="Ex: {{idade}}"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="operator" className="block text-sm font-medium text-gray-700">
            Operador
          </label>
          <select
            id="operator"
            value={operator}
            onChange={(e) => handleChange('operator', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            {CONDITION_OPERATORS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {operator !== 'exists' && (
          <div>
            <label htmlFor="value" className="block text-sm font-medium text-gray-700">
              Valor
            </label>
            <input
              id="value"
              type="text"
              value={value}
              onChange={(e) => handleChange('value', e.target.value)}
              placeholder="Ex: 18"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        )}

        <p className="text-xs text-gray-500">
          No fluxograma, a saída <span className="font-semibold text-green-600">Verdadeiro</span> é seguida quando a
          condição é atendida, e a saída <span className="font-semibold text-red-500">Falso</span> quando não é.
        </p>
      </div>
    </Modal>
  );
}
