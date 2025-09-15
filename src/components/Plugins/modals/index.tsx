import useModalStore from "@Composer/store/flow/modal";

import { MessageModal } from "./MessageModal";
import { RequestModal } from "./RequestModal";
import { VariableModal } from "./VariableModal";

export function Modals() {
    const selected = useModalStore(state => state.selected);

    return (
        <>
            <MessageModal open={selected == 'message'} />
            <RequestModal open={selected == 'request'} />
            <VariableModal open={selected == 'variables'} />
        </>
    )
}