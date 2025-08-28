import useModalStore from "@Composer/store/flow/modal";

import NodeDrillDownMenu from "./NodeDrillDownMenu";
import { NodeSearch } from "./NodeSearch";

export function NodeNew() {
    const { selected, setSelected } = useModalStore();
    
    if (selected !== 'new-node') return <></>
    
    const onClose = () => {
        setSelected('')
    }

    return (
        <div className="fixed left-0 top-0 inset-0 py-12 z-50 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300"  onClick={onClose}>
            <div className="fixed right-0 top-0 bg-gray-300 min-h-full w-full max-w-md mx-auto shadow-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="bg-gray-700 p-4">
                    <div className="flex items-center">
                        <h1 className="text-md font-bold text-white">What happens next?</h1>
                    </div>
                </div>
                <div className="bg-white min-h-screen p-4">
                    <NodeSearch />
                    <NodeDrillDownMenu />
                </div>
            </div>
        </div>
    );
}