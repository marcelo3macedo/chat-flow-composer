import { useState, useEffect } from 'react';

import { fetchWorkflows } from '../services/workflowService';

const useWorkflows = () => {
  const [workflows, setWorkflows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data:any = await fetchWorkflows();
        setWorkflows(data);

      } catch (err:any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  return { workflows, isLoading, error };
};

export default useWorkflows;