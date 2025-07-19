import type { ReactNode } from "react";

export interface FlowBackgroundProps {
  children: ReactNode;
}

export interface BackgroundState {
  backgroundImage: string;
  setBackgroundImage: (url: string) => void;
}

export interface ModalState {
  selected: string;
  setSelected: (selected: string) => void;
}