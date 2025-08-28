import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "./Base";

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
