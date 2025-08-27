import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";

import { Modal } from "./Base";

export function RequestModal({ open }: ModalActions) {
  return (
    <Modal isOpen={open} title="Request" Icon={icons.REQUEST}>
        <form className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">Text</label>
            <input
                type="text"
                placeholder="Hello world..."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            </div>
        </form>
    </Modal>
  );
}
