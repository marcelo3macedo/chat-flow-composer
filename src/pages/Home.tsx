import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Navigation/Sidebar";
import WorkflowList from "../components/Workflow/WorkflowList";

const Home = () => {
  return (
    <div className="flex bg-[#282a36]">
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex flex-1 flex-row">
          <Sidebar />
          <div className="p-8 w-full">
            <h1 className="text-3xl font-bold text-[#f8f8f2] mb-6">Workflows</h1>
            <WorkflowList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;