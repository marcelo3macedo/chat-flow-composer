import {
  BaseEdge,
  getBezierPath,
  type EdgeProps,
} from '@xyflow/react';
import React from 'react';

import CustomEdgeLabelRenderer from './elements/CustomEdgeLabelRenderer';

const CustomEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  selected,
}) => {
  const [edgePath, edgeCenterX, edgeCenterY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <CustomEdgeLabelRenderer
        id={id}
        edgeCenterX={edgeCenterX}
        edgeCenterY={edgeCenterY}
        selected={selected}
      />
    </>
  );
};

export default CustomEdge;