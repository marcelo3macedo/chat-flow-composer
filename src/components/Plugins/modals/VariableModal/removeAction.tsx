import { MinusCircleIcon } from "@heroicons/react/20/solid";

import useModalStore from "@Composer/store/flow/modal";

export function RemoveAction({ variable }: any) {
    const { props, updateProps } = useModalStore();
    const variables = props?.data?.variables as any || []

    const handleRemoveVariable = (id: string) => {
        const newVariables = variables.filter((variable:any) => variable.id !== id);
        updateProps({
            data: {
                variables: newVariables
            },
        });
    };

    if (variables.length < 2) return <></>

    return (
        <div className="flex-shrink-0 flex items-end h-full pt-6">
            <button
                type="button"
                onClick={() => handleRemoveVariable(variable.id)}
                className="text-red-300 hover:text-red-500 transition-colors ml-1"
            >
                <MinusCircleIcon className="h-8 w-8" />
            </button>
        </div>
    );
}