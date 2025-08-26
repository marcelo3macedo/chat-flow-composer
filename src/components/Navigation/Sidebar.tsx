import { getMenu } from "../../services/navigateService";

const Sidebar = () => {
  const navItems = getMenu();
  
  return (
    <div className="bg-[#282a36] w-64 h-screen p-4 border-r border-[#44475a] flex flex-col">
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map(({ label, icon: Icon, href, active }) => (
            <li key={label}>
              <a
                href={href}
                className={`flex items-center space-x-2 p-3 rounded-md font-semibold transition-colors ${
                  active
                    ? "bg-[#44475a] text-[#f8f8f2]"
                    : "text-[#f8f8f2] hover:bg-[#44475a]"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;