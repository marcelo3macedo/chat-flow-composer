import { useReactFlow, type FinalConnectionState } from "@xyflow/react";
import useNodesMenuStore from "../store/nodes/menu";
import useModalStore from "../store/flow/modal";
import useConnectEdgesStore from "../store/edges/connect";

export function useConnectState() {
    const setSelected = useModalStore(state => state.setSelected);
    const { setActiveGroup } = useNodesMenuStore();
    const { setFinalState } = useConnectEdgesStore();
    const { screenToFlowPosition } = useReactFlow();

    const connectionEnded = (event: MouseEvent | TouchEvent, params: FinalConnectionState) => {
        setSelected('new-node');
        setActiveGroup(undefined);

        const { clientX, clientY } =
          'changedTouches' in event ? event.changedTouches[0] : event;

        params.to = screenToFlowPosition({
            x: clientX,
            y: clientY,
        });
        setFinalState(params);
    }

    return {
        connectionEnded
    };
}