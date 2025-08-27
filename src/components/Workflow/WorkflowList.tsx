import useWorkflows from "@Composer/hooks/useWorkflows";
import type { Workflow } from "@Composer/interfaces/Workflow";

import WorkflowItem from "./WorkflowItem";
import LoadingScreen from "../General/Loading/LoadingScreen";

const WorkflowList = () => {
  const { workflows, isLoading } = useWorkflows();

  if (isLoading) {
    return <LoadingScreen />
  }
  
  return (
    <div className="space-y-4">
      {workflows.map((workflow: Workflow) => (
        <WorkflowItem key={workflow.id} workflow={workflow} />
      ))}
    </div>
  );
};

export default WorkflowList;