import { useReactFlow, type FinalConnectionState } from "@xyflow/react";

import useConnectEdgesStore from "@Composer/store/edges/connect";
import useModalStore from "@Composer/store/flow/modal";
import useNodesMenuStore from "@Composer/store/nodes/menu";

export function useConnectState() {
    const setSelected = useModalStore(state => state.setSelected);
    const { setActiveGroup } = useNodesMenuStore();
    const { setFinalState } = useConnectEdgesStore();
    const { screenToFlowPosition } = useReactFlow();

    const connectionEnded = (event: MouseEvent | TouchEvent, params: FinalConnectionState) => {
        if (params.toHandle || params.toNode) return
        
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