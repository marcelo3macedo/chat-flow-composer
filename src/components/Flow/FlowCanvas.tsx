import { ReactFlowProvider } from "@xyflow/react";

import FlowBackground from "./FlowBackground";
import FlowRenderer from "./FlowRenderer";
import { RightSidebar } from "../Menus/RightSidebar";
import '@xyflow/react/dist/style.css';

export default function FlowCanvas() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <FlowBackground>
        <ReactFlowProvider>
          <FlowRenderer />
          <RightSidebar />
        </ReactFlowProvider>
      </FlowBackground>
    </div>
  );
}
