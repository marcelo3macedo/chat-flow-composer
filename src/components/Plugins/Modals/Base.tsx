import { XMarkIcon } from "@heroicons/react/24/outline";
import type { ModalProps } from "../../../interfaces/Plugin";
import useModalStore from "../../../store/flow/modal";

export function Modal({ isOpen, title, children }: ModalProps) {
  const setSelected = useModalStore(state => state.setSelected);
  if (!isOpen) return null;

  const onClose = () => {
    setSelected('')
  }

  return (
    <div className="fixed left-0 top-0 inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300" onClick={onClose}>
      <div className="bg-white w-full max-w-2xl mx-auto rounded-lg shadow-lg p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-6 w-6 text-slate-700" />
        </button>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div>{children}</div>
        <div className="mt-4">
          <button
              type="submit"
              className="bg-gray-300 px-10 py-3 text-gray-700 font-bold rounded"
          >
              Save
          </button>
        </div>
      </div>
    </div>
  );
}
