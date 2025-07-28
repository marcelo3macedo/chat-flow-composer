import type { MenuItemState } from "../interfaces/Node";
import { generateNodeByType } from "../shared/utils/nodeUtils";
import useModalStore from "../store/flow/modal";
import useNodesMenuStore from "../store/nodes/menu";
import { useNodeState } from "./useNodeState";

export function useMenuState() {
  const setSelected = useModalStore(state => state.setSelected);
  const { setActiveGroup, menu } = useNodesMenuStore();
  const { add } = useNodeState();

  const initialMenu = () => {
    setSelected('new-node')
    const actions = menu?.find(x => x.name == 'Actions')
    if (actions) {
      setActiveGroup(actions)
    }
  }

  const menuSelected = (item: MenuItemState) => {
    setSelected('');
    const node = generateNodeByType(item.type);
    add(node)
  }

  return { initialMenu, menuSelected };
}