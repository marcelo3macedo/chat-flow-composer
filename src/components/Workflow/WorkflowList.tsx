import WorkflowItem from './WorkflowItem';
import useWorkflows from '../../hooks/useWorkflows';
import type { Workflow } from '../../interfaces/Workflow';
import LoadingScreen from '../General/Loading/LoadingScreen';

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