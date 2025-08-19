import type { FinalConnectionState } from "@xyflow/react";

export interface EdgeState {
  finalState: FinalConnectionState | null;
  setFinalState: (finalState: FinalConnectionState | null) => void;
}