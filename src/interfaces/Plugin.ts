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
  children?: ReactNode;
}

export type HandleType = 'source-only' | 'source-target' | 'branch';

export interface ModalProps {
  Icon: ElementType;
  isOpen: boolean;
  title: string;
  description?: string;
  children: ReactNode;
}

export interface ModalActions {
  open: boolean;
}

export type ModalType = 'messenger' | 'whatsapp' | 'telegram' | 'message' | 'request' | 'initial' | 'variables' | 'manually' | 'webhook' | 'github' | 'instagram' | 'mail' | 'question' | 'condition' | 'transfer_operator' | 'media';