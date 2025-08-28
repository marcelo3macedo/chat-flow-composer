import { XMarkIcon } from "@heroicons/react/24/outline";

import type { ModalProps } from "@Composer/interfaces/Plugin";
import useModalStore from "@Composer/store/flow/modal";

export function Modal({ Icon, isOpen, title, children }: ModalProps) {
  const setSelected = useModalStore(state => state.setSelected);
  if (!isOpen) return null;

  const onClose = () => {
    setSelected('')
  }

  return (
    <div className="fixed left-0 top-0 inset-0 py-12 z-50 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300" onClick={onClose}>
      <div className="bg-white min-h-full w-full max-w-2xl mx-auto rounded-2xl shadow-lg relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="bg-gray-300 p-4">
          <div className="flex items-center">
            <div className="w-full flex items-center">
              <Icon className="h-6 w-6 text-slate-700" />
              <h2 className="text-xl px-2 font-semibold">{title}</h2>
            </div>
            <div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6 text-slate-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
