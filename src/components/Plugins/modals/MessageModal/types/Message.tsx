import useModalStore from "@Composer/store/flow/modal";

export function TextMessageModal() {
    const { props, updateProps } = useModalStore();
    const value = (props?.data?.value || '') as string;
    const selectValueChange = (e: any) => {
        updateProps({
            data: {
                ...props?.data,
                value: e.target.value
            },
        });
    }
    
    return (
        <input
            value={value}
            type="text"
            placeholder="Hello world..."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            onChange={selectValueChange}
        />
    );
}