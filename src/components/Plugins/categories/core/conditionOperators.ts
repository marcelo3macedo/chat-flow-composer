export type ConditionOperator = 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than' | 'exists';

export const CONDITION_OPERATORS: { value: ConditionOperator; label: string; symbol: string }[] = [
  { value: 'equals', label: 'Igual a', symbol: '=' },
  { value: 'not_equals', label: 'Diferente de', symbol: '≠' },
  { value: 'contains', label: 'Contém', symbol: '∋' },
  { value: 'greater_than', label: 'Maior que', symbol: '>' },
  { value: 'less_than', label: 'Menor que', symbol: '<' },
  { value: 'exists', label: 'Está preenchida', symbol: '∃' },
];
