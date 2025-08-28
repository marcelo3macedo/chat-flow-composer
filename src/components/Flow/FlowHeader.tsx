import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import useFlowContentStore from "@Composer/store/flow/content";

export default function FlowHeader() {
    const { workflow, updateWorkflowField } = useFlowContentStore();
    const navigate = useNavigate();
    
    if (!workflow) return <></>

    const backButton = () => {
        navigate(`/`);
    };

    return (
        <header className="fixed top-0 left-0 z-10 w-full bg-[#1e1f29] border-b border-[#44475a] px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-8">
            <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white"
                onClick={backButton}
            >
                <FiArrowLeft size={24} />
            </button>

            <input
                type="text"
                value={workflow?.name || ''}
                onChange={(e) => updateWorkflowField('name', e.target.value)}
                className="bg-transparent border-b border-gray-500 focus:border-[#50fa7b] outline-none text-white text-lg px-2 py-1"
            />

            <span className="text-md text-gray-400">1.0</span>
            </div>

            <div className="flex items-center space-x-4">
                <button
                    onClick={() => updateWorkflowField('active', !workflow.active)}
                    className={`px-3 py-1 rounded-md font-medium text-sm transition-colors ${
                    workflow?.active
                        ? "bg-[#50fa7b] text-[#1e1f29] hover:bg-[#3ce868]"
                        : "bg-gray-600 text-gray-200 hover:bg-gray-500"
                    }`}
                >
                    {workflow.active ? "Active" : "Inactive"}
                </button>

                <button
                    className={`px-3 py-1 rounded-md font-medium text-sm transition-colors bg-yellow-400 text-[#1e1f29] hover:bg-yellow-800`}
                >
                    Save Changes
                </button>
            </div>
        </header>
    );
}
