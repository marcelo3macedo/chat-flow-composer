import { create } from 'zustand';
import type { MenuState, NodesMenuState } from '../../interfaces/Node';

const defaultMenu = [{
    name: "Actions",
    description: "Execute tasks manually or via triggers.",
    items: [
      {
        name: "Manual",
        description: "Start flow manually.",
      },
      {
        name: "Webhook",
        description: "Trigger via HTTP request.",
      },
    ],
  },
  {
    name: "Integrations",
    description: "Connect with external platforms.",
    items: [
      {
        name: "Github",
        description: "React to GitHub events.",
      },
    ],
  },
  {
    name: "Interactions",
    description: "Handle messages, requests, and variables.",
    items: [
      {
        name: "Message",
        description: "Send or show a message.",
      },
      {
        name: "Request",
        description: "Make HTTP requests.",
      },
      {
        name: "Variables",
        description: "Set or update variables.",
      },
    ],
  }]

const useNodesMenuStore = create<NodesMenuState>((set) => ({
  menu: defaultMenu,
  setMenu: (menu: MenuState[]) => set({ menu }),
}));
export default useNodesMenuStore;
