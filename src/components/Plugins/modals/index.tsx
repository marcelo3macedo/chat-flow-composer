import useModalStore from "@Composer/store/flow/modal";

import { ConditionModal } from "./ConditionModal";
import { MediaModal } from "./MediaModal";
import { MessageModal } from "./MessageModal";
import { InstagramModal } from "./messengers/InstagramModal";
import { MailModal } from "./messengers/MailModal";
import { MessengerModal } from "./messengers/MessengerModal";
import { TelegramModal } from "./messengers/TelegramModal";
import { WhatsappModal } from "./messengers/WhatsappModal";
import { QuestionModal } from "./QuestionModal";
import { RequestModal } from "./RequestModal";
import { TransferOperatorModal } from "./TransferOperatorModal";
import { VariableModal } from "./VariableModal";

export function Modals() {
    const selected = useModalStore(state => state.selected);

    return (
        <>
            <MessageModal open={selected == 'message'} />
            <RequestModal open={selected == 'request'} />
            <VariableModal open={selected == 'variables'} />
            <QuestionModal open={selected == 'question'} />
            <ConditionModal open={selected == 'condition'} />
            <MediaModal open={selected == 'media'} />
            <TransferOperatorModal open={selected == 'transfer_operator'} />
            <WhatsappModal open={selected == 'whatsapp'} />
            <InstagramModal open={selected == 'instagram'} />
            <MailModal open={selected == 'mail'} />
            <MessengerModal open={selected == 'messenger'} />
            <TelegramModal open={selected == 'telegram'} />
        </>
    )
}