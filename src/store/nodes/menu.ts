import { create } from 'zustand';

import menus from "../../assets/mocks/menus.json";

import type { MenuState, NodesMenuState } from '../../interfaces/Node';


const useNodesMenuStore = create<NodesMenuState>((set) => ({
  menu: menus,
  activeGroup: undefined,
  setMenu: (menu: MenuState[]) => set({ menu }),
  setActiveGroup: (activeGroup: MenuState | undefined) => set({ activeGroup }),
}));
export default useNodesMenuStore;
