import { BaseNode } from "./Base";
import { icons } from "../../shared/ui/icons";

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
