import FlowHeader from "@Composer/components/Flow/FlowHeader";

import { FlowCanvas } from "../components/Flow";
import Resources from "../components/Resources";

export default function Flow() {
  return (
      <>
        <FlowHeader />
        <FlowCanvas />
        <Resources />
      </>
    );
}