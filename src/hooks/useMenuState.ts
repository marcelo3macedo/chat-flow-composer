import type { MenuItemState } from "../interfaces/Node";
import { generateNodeByType } from "../shared/utils/nodeUtils";
import useConnectEdgesStore from "../store/edges/connect";
import useModalStore from "../store/flow/modal";
import useNodesMenuStore from "../store/nodes/menu";
import { useNodeState } from "./useNodeState";
import { generateEdgeByType } from "../shared/utils/edgeUtils";

export function useMenuState() {
  const setSelected = useModalStore(state => state.setSelected);
  const { setActiveGroup, menu } = useNodesMenuStore();
  const { finalState, setFinalState } = useConnectEdgesStore();
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
    const node = generateNodeByType(item.type, finalState);
    const edge = generateEdgeByType(finalState, node);

    add(node, edge);
    setFinalState(null);
  }

  return { initialMenu, menuSelected };
}