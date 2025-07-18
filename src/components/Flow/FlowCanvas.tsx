import FlowBackground from "./FlowBackground";
import FlowRenderer from "./FlowRenderer";
import '@xyflow/react/dist/style.css';

export default function FlowCanvas() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <FlowBackground>
        <FlowRenderer />
      </FlowBackground>
    </div>
  );
}
