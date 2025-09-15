import useModalStore from "@Composer/store/flow/modal";

import { MessageModal } from "./MessageModal";
import { InstagramModal } from "./messengers/InstagramModal";
import { MailModal } from "./messengers/MailModal";
import { MessengerModal } from "./messengers/MessengerModal";
import { TelegramModal } from "./messengers/TelegramModal";
import { WhatsappModal } from "./messengers/WhatsappModal";
import { RequestModal } from "./RequestModal";
import { VariableModal } from "./VariableModal";

export function Modals() {
    const selected = useModalStore(state => state.selected);

    return (
        <>
            <MessageModal open={selected == 'message'} />
            <RequestModal open={selected == 'request'} />
            <VariableModal open={selected == 'variables'} />
            <WhatsappModal open={selected == 'whatsapp'} />
            <InstagramModal open={selected == 'instagram'} />
            <MailModal open={selected == 'mail'} />
            <MessengerModal open={selected == 'messenger'} />
            <TelegramModal open={selected == 'telegram'} />
        </>
    )
}