import { BaseNode } from "./Base";
import { icons } from "../../shared/ui/icons";

export function MessageNode() {
  return (
    <>
      <BaseNode
        icon={icons.MESSAGE}
        type='message'
        title="Message"
        description="Sends a message"
      />
    </>
  );
}
