import { icons } from "@Composer/shared/ui/icons";

import { BaseNode } from "./Base";

export function RequestNode() {
  return (
    <BaseNode
      type="request"
      icon={icons.REQUEST}
      title="Request"
      description="Make a HTTP request"
    />
  );
}
