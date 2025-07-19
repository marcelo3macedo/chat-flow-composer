import type { ElementType } from "react";

export interface BaseNodeProps {
  icon: ElementType;
  title: string;
  description: string;
  handleType?: HandleType;
}

export type HandleType = 'source-only' | 'source-target';
