import type { ElementType, ReactNode } from "react";

export interface BaseNodeProps {
  icon: ElementType;
  title: string;
  type: ModalType;
  description: string;
  handleType?: HandleType;
  onClick?: () => void;
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

export type ModalType = 'message' | 'request' | 'initial' | 'variables';