import { useState, useEffect } from 'react';

import { workflowService } from '@Composer/services/workflowService';

const useWorkflows = () => {
  const [workflows, setWorkflows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      setIsLoading(true);
      const data:any = await workflowService.list();
      setWorkflows(data);

    } catch (err:any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { workflows, isLoading, error };
};

export default useWorkflows;