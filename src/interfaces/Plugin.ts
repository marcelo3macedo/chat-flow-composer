import type { NodeProps } from "@xyflow/react";
import type { ElementType, ReactNode } from "react";

export interface BaseNodeProps {
  icon: ElementType;
  title: string;
  type?: ModalType;
  description: string;
  handleType?: HandleType;
  props?: NodeProps;
  onClick?: () => void;
  selected?: boolean;
}

export type HandleType = 'source-only' | 'source-target';

export interface ModalProps {
  Icon: ElementType;
  isOpen: boolean;
  title: string;
  children: ReactNode;
}

export interface ModalActions {
  open: boolean;
}

export type ModalType = 'messenger' | 'whatsapp' | 'telegram' | 'message' | 'request' | 'initial' | 'variables' | 'manually' | 'webhook' | 'github' | 'instagram' | 'mail';