import type { ModalActions } from "../../../interfaces/Plugin";
import { Modal } from "./Base";
import { icons } from "../../../shared/ui/icons";

export function MessageModal({ open }: ModalActions) {
  return (
    <Modal isOpen={open} title="Message" Icon={icons.MESSAGE}>
        <form className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
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
