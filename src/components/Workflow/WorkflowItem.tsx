import { Switch } from '@headlessui/react';
import { useState } from 'react';

import type { Workflow } from "@Composer/interfaces/Workflow";

const WorkflowItem = ({ workflow }: { workflow: Workflow}) => {
  const [enabled, setEnabled] = useState(workflow.enabled);
  
  return (
    <div
      className="bg-[#282a36] p-6 rounded-lg shadow-md border border-[#44475a] flex items-center justify-between transition-all duration-300 hover:bg-[#44475a] hover:cursor-pointer"
    >
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#f8f8f2]">{workflow.name}</h3>
        <div className="mt-2 space-x-2">
          {workflow.tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 text-xs font-medium bg-[#6272a4] text-[#f8f8f2] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-3 text-sm font-medium text-[#f8f8f2]">
          {enabled ? 'Ativo' : 'Inativo'}
        </span>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-[#50fa7b]' : 'bg-[#6272a4]'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#50fa7b] focus:ring-offset-2 focus:ring-offset-[#282a36]`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default WorkflowItem;