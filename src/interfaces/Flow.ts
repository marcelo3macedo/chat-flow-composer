import type { Edge, Node, NodeProps } from "@xyflow/react";
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
  props: NodeProps | undefined;
  searchQuery: string;
  setSelected: (selected: string) => void;
  setSearchQuery: (searchQuery: string) => void;
  setProps: (props: NodeProps) => void;
  updateProps: (partial: Partial<NodeProps>) => void;
}

export interface ContentState {
  nodes: Node[];
  edges: Edge[];
}