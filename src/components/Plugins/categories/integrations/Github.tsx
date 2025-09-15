import { FaGithub } from "react-icons/fa";

import { BaseNode } from "../../Base";

import type { NodeProps } from "@xyflow/react";

export function GithubNode(props: NodeProps) {
  return (
    <BaseNode
      props={props}
      icon={FaGithub}
      type='github'
      title="Github"
      description="Integrates with Github"
      selected={props.selected}
    />
  );
}
