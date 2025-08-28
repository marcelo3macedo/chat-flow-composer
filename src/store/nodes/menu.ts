import { create } from 'zustand';

import type { MenuState, NodesMenuState } from '../../interfaces/Node';

const defaultMenu = [{
    name: "Actions",
    description: "Execute tasks manually or via triggers.",
    items: [
      {
        name: "Manual",
        description: "Start flow manually.",
        type: "manually"
      },
      {
        name: "Webhook",
        description: "Trigger via HTTP request.",
        type: "webhook"
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
        type: "github"
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
        type: "message"
      },
      {
        name: "Request",
        description: "Make HTTP requests.",
        type: "request"
      },
      {
        name: "Variables",
        description: "Set or update variables.",
        type: "variables"
      },
    ],
  }]

const useNodesMenuStore = create<NodesMenuState>((set) => ({
  menu: defaultMenu,
  activeGroup: undefined,
  setMenu: (menu: MenuState[]) => set({ menu }),
  setActiveGroup: (activeGroup: MenuState | undefined) => set({ activeGroup }),
}));
export default useNodesMenuStore;
