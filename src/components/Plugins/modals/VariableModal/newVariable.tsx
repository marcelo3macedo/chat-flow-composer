import { PlusCircleIcon } from "@heroicons/react/20/solid";

import useModalStore from "@Composer/store/flow/modal";

export function NewVariable() {
  const { props, updateProps } = useModalStore();

  const handleAddVariable = () => {
    const newVariable = { id: Date.now().toString(), title: '', value: '' };
    const actualVariables = props?.data?.variables as any || []
    const variables = [...actualVariables, newVariable]

    updateProps({
      data: {
        variables
      },
    });
  };

  return (
    <div className="flex justify-center">
        <button
            type="button"
            onClick={handleAddVariable}
            className="w-full mt-4 flex items-center justify-center p-2 text-green-500 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:text-green-600 transition-colors"
        >
            <PlusCircleIcon className="h-6 w-6" />
            <span className="ml-2 text-sm font-medium">Add Variable</span>
        </button>
    </div>
  );
}