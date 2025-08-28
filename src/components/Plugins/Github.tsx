import { FaGithub } from "react-icons/fa";

import { BaseNode } from "./Base";

export function GithubNode() {
  return (
    <BaseNode
      icon={FaGithub}
      type='github'
      title="Github"
      description="Integrates with Github"
    />
  );
}
