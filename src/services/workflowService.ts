import mockWorkflows from "../assets/mocks/workflows.json";

export async function fetchWorkflows() {
    // REMOVE
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // const response = await fetch("/api/workflows");
  
    return mockWorkflows;
}
