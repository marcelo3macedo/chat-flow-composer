import type { FlowBackgroundProps } from '@Composer/interfaces/Flow';
import useBackgroundStore from '@Composer/store/flow/background';
import '@xyflow/react/dist/style.css';

export default function FlowBackground({ children }:FlowBackgroundProps) {
  const backgroundImage = useBackgroundStore(state => state.backgroundImage);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100vh' }}>
        {children}
      </div>
    </div>
  );
}