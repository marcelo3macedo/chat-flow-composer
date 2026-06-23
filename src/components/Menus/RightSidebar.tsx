import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  MagnifyingGlassIcon,
  PlusIcon
} from "@heroicons/react/24/outline";
import { useReactFlow } from "@xyflow/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { useNodeState } from "@Composer/hooks/useNodeState";
import { icons } from "@Composer/shared/ui/icons";
import { getNodeAccent } from "@Composer/shared/ui/nodeTheme";

interface SidebarItem {
  id: string;
  name: string;
  description: string;
  type: string;
  iconName: string;
}

interface SidebarCategory {
  name: string;
  description: string;
  items: SidebarItem[];
}

const CATEGORIES: SidebarCategory[] = [
  {
    name: "Conteúdo",
    description: "Elementos para exibir ou enviar mensagens",
    items: [
      {
        id: "message",
        name: "Mensagem",
        description: "Envia uma mensagem de texto convencional.",
        type: "message",
        iconName: "MESSAGE"
      },
      {
        id: "media",
        name: "Mídia",
        description: "Envia imagem, vídeo ou outros arquivos.",
        type: "media",
        iconName: "MEDIA"
      }
    ]
  },
  {
    name: "Interação & Dados",
    description: "Coleta informações e gerencia variáveis",
    items: [
      {
        id: "question",
        name: "Pergunta",
        description: "Faz uma pergunta ao usuário e guarda a resposta.",
        type: "question",
        iconName: "QUESTION"
      },
      {
        id: "variables",
        name: "Variável",
        description: "Define ou atualiza valores de variáveis no chat.",
        type: "variables",
        iconName: "VARIABLES"
      },
      {
        id: "request",
        name: "Requisição",
        description: "Faz uma chamada HTTP e pode salvar a resposta em variáveis.",
        type: "request",
        iconName: "REQUEST"
      }
    ]
  },
  {
    name: "Controle",
    description: "Decisões e redirecionamento de fluxo",
    items: [
      {
        id: "condition",
        name: "Condição",
        description: "Direciona o fluxo de acordo com regras lógicas.",
        type: "condition",
        iconName: "CONDITION"
      },
      {
        id: "transfer_operator",
        name: "Transferir operador",
        description: "Encaminha o chat para um atendente humano.",
        type: "transfer_operator",
        iconName: "TRANSFER_OPERATOR"
      }
    ]
  }
];

export function RightSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  
  const { add } = useNodeState();
  const { getViewport } = useReactFlow();

  const handleAddItem = (type: string) => {
    const viewport = getViewport();
    
    // Calculate the flow coordinate corresponding to the center of the screen
    const x = -viewport.x / viewport.zoom + window.innerWidth / (2 * viewport.zoom) - 100;
    const y = -viewport.y / viewport.zoom + window.innerHeight / (2 * viewport.zoom) - 50;
    
    // Add small random offset to prevent direct stacking
    const randomOffset = (Math.random() - 0.5) * 60;

    const node = {
      id: crypto.randomUUID(),
      type,
      position: {
        x: x + randomOffset,
        y: y + randomOffset
      },
      data: {}
    };

    add(node);
  };

  // Filter items based on search query and category tab
  const filteredCategories = CATEGORIES.map(category => {
    // If selectedCategory is not "Todos" and doesn't match this category name, skip items
    if (selectedCategory !== "Todos" && category.name !== selectedCategory) {
      return { ...category, items: [] };
    }

    const items = category.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return { ...category, items };
  }).filter(category => category.items.length > 0);

  return (
    <div className="fixed right-0 top-[73px] z-20 flex h-[calc(100vh-73px)]">
      {/* Toggle Button Tab */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-1/2 -left-10 flex h-20 w-10 -translate-y-1/2 items-center justify-center rounded-l-xl border border-r-0 border-[#44475a] bg-[#1e1f29]/95 text-gray-400 backdrop-blur-md transition-colors hover:bg-[#282a36] hover:text-white"
        title={isOpen ? "Recolher painel" : "Expandir painel"}
      >
        {isOpen ? (
          <ChevronRightIcon className="h-6 w-6" />
        ) : (
          <ChevronLeftIcon className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 340, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex h-full w-[340px] flex-col border-l border-[#44475a]/70 bg-[#1e1f29]/95 text-[#f8f8f2] shadow-2xl backdrop-blur-md"
          >
            {/* Header / Title */}
            <div className="border-b border-[#44475a]/50 p-4">
              <h3 className="text-lg font-bold text-[#8be9fd]">Adicionar Caixas</h3>
              <p className="text-xs text-gray-400 mt-1">
                Selecione ou clique para adicionar componentes ao fluxo do chatbot.
              </p>
            </div>

            {/* Search Input */}
            <div className="px-4 py-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar componentes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-[#44475a] bg-[#282a36] py-2 pl-10 pr-4 text-sm text-[#f8f8f2] placeholder-gray-400 outline-none transition-all focus:border-[#8be9fd] focus:ring-1 focus:ring-[#8be9fd]"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Category Navigation Pills */}
            <div className="flex space-x-1.5 overflow-x-auto px-4 pb-2 scrollbar-none">
              {["Todos", "Conteúdo", "Interação & Dados", "Controle"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-[#8be9fd] text-[#1e1f29]"
                      : "bg-[#282a36] text-gray-300 hover:bg-[#44475a] hover:text-[#f8f8f2]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Component Cards Grouped List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-[#44475a] scrollbar-track-transparent">
              {filteredCategories.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center text-gray-400">
                  <p className="text-sm">Nenhum componente encontrado.</p>
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("Todos");
                      }}
                      className="mt-2 text-xs text-[#8be9fd] hover:underline"
                    >
                      Limpar filtros
                    </button>
                  )}
                </div>
              ) : (
                filteredCategories.map((category) => (
                  <div key={category.name} className="space-y-3">
                    <div className="flex items-baseline justify-between border-b border-[#44475a]/30 pb-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff79c6]">
                        {category.name}
                      </h4>
                      <span className="text-[10px] text-gray-400">
                        {category.items.length} itens
                      </span>
                    </div>

                    <div className="grid gap-3">
                      {category.items.map((item) => {
                        const Icon = icons[item.iconName as keyof typeof icons] || icons.MESSAGE;
                        const accent = getNodeAccent(item.type);
                        return (
                          <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAddItem(item.type)}
                            className="group relative flex cursor-pointer items-start space-x-3 rounded-xl border border-[#44475a]/50 bg-[#282a36]/40 p-3 transition-all duration-200 hover:border-[#6272a4] hover:bg-[#282a36] hover:shadow-lg hover:shadow-black/20"
                          >
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#282a36] border ${accent.borderSoft} ${accent.icon}`}>
                              <Icon className="h-5 w-5" />
                            </div>

                            <div className="flex-1 min-w-0 pr-6">
                              <h5 className={`text-sm font-semibold ${accent.icon}`}>
                                {item.name}
                              </h5>
                              <p className="mt-0.5 text-xs text-gray-400 leading-relaxed line-clamp-2 group-hover:text-gray-300">
                                {item.description}
                              </p>
                            </div>

                            <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                              <div className={`flex h-6 w-6 items-center justify-center rounded-full ${accent.badgeBg} ${accent.icon}`}>
                                <PlusIcon className="h-4 w-4" />
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
