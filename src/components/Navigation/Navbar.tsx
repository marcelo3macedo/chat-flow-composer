const Navbar = () => {
  return (
    <nav className="bg-[#282a36] border-b border-[#44475a] p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="n8n Logo" className="h-10" />
      </div>

      <button
        type="button"
        className="flex items-center space-x-2 px-4 py-2 bg-[#50fa7b] text-[#282a36] font-semibold rounded-md hover:bg-[#bd93f9] transition-colors"
      >
        <span>Create new Workflow</span>
      </button>
    </nav>
  );
};

export default Navbar;