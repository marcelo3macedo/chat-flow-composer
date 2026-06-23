import { 
  DocumentTextIcon, 
  SpeakerWaveIcon, 
  PaperClipIcon, 
  PhotoIcon
} from "@heroicons/react/24/outline";

import type { ModalActions } from "@Composer/interfaces/Plugin";
import { icons } from "@Composer/shared/ui/icons";
import useModalStore from "@Composer/store/flow/modal";

import { Modal } from "../Base";
import { DocumentModal } from "./types/Document";
import { ImageMessageModal } from "./types/Image";
import { TextMessageModal } from "./types/Message";

import type { MessageType } from "./interfaces";

export function MessageModal({ open }: ModalActions) {
  const { props, updateProps } = useModalStore();
  const selectedType = (props?.data?.type || 'text') as MessageType;
  
  const selectTypeChange = (type: MessageType) => {
    updateProps({
      data: {
        type: type
      },
    });
  };
  
  const renderFormFields = () => {
    switch (selectedType) {
      case "text":
        return <TextMessageModal />;
      case "audio":
      case "document":        
        return <DocumentModal selectedType={selectedType} />;
      case "image":
        return <ImageMessageModal />;
      default:
        return null;
    }
  };

  const messageTypes: { value: MessageType; label: string; description: string; icon: React.ComponentType<any> }[] = [
    { 
      value: "text", 
      label: "Texto", 
      description: "Mensagens escritas ou com formatação básica para o usuário.", 
      icon: DocumentTextIcon 
    },
    { 
      value: "audio", 
      label: "Áudio", 
      description: "Mensagens de voz gravadas ou arquivos de áudio.", 
      icon: SpeakerWaveIcon 
    },
    { 
      value: "document", 
      label: "Documento", 
      description: "Arquivos PDF, planilhas, arquivos de texto ou outros anexos.", 
      icon: PaperClipIcon 
    },
    { 
      value: "image", 
      label: "Imagem", 
      description: "Fotos, banners, capturas de tela ou GIFs no chat.", 
      icon: PhotoIcon 
    },
  ];

  return (
    <Modal
      isOpen={open}
      title="Configuração de Mensagem"
      Icon={icons.MESSAGE}
      description="Use este nó para interagir diretamente com o seu cliente. Escolha abaixo o tipo de conteúdo mais adequado para sua comunicação. O chatbot irá processar e exibir a mensagem exatamente no formato selecionado quando o fluxo atingir este ponto."
    >
      <div className="space-y-6 py-2">
        {/* Seletor Visual de Tipo de Mensagem */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            Selecione o Tipo de Conteúdo
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {messageTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.value;
              return (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => selectTypeChange(type.value)}
                  className={`flex items-start gap-3 p-3.5 border rounded-xl transition-all text-left group hover:scale-[1.01] ${
                    isSelected
                      ? "border-blue-500 bg-blue-50/40 text-blue-900 shadow-sm ring-1 ring-blue-500"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 text-gray-700"
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 transition-colors ${
                    isSelected 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-semibold text-sm block">{type.label}</span>
                    <span className="text-xs text-gray-500 leading-normal">{type.description}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Área de Conteúdo */}
        <div className="pt-5 border-t border-gray-100">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Conteúdo da Mensagem
          </label>
          <div className="bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-[8pt]">
            {renderFormFields()}
          </div>
        </div>
      </div>
    </Modal>
  );
}