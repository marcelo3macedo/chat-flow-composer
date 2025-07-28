import { motion, AnimatePresence } from "framer-motion";
import useNodesMenuStore from "../../../store/nodes/menu";
import { getIconByName } from "../../../shared/ui/icons";
import { useMenuState } from "../../../hooks/useMenuState";

export default function NodeDrillDownMenu() {
  const { menu, activeGroup, setActiveGroup }  = useNodesMenuStore();
  const { menuSelected } = useMenuState();

  if (!menu) return <></>

  return (
    <div className="bg-white py-4 w-full max-w-md mx-auto space-y-4 overflow-hidden">
      <AnimatePresence mode="wait">
        {!activeGroup ? (
          <motion.div
            key="main"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {menu.map((menu) => (
              <button
                key={menu.name}
                className="w-full text-left p-4 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                onClick={() => setActiveGroup(menu)}
              >
                <h2 className="text-lg text-gray-700">{menu.name}</h2>
                <h5 className="text-gray-500 text-md mt-1">{menu.description}</h5>
              </button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="sub"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-2"
          >
            <button
              className="text-sm text-gray-500 mb-2"
              onClick={() => setActiveGroup(undefined)}
            >
              ← Back
            </button>
            <h2 className="text-md font-semibold text-gray-700">{activeGroup.name}</h2>
            <ul className="space-y-3 text-gray-800">
              {activeGroup.items.map((item) => {
                const Icon = getIconByName(item.name);
                return (
                  <li key={item.name} className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer flex items-center" onClick={() => { menuSelected(item) }}>
                    <Icon className="h-8 w-8 text-slate-700" />
                    <div className="pl-2">
                      <h2 className="text-lg text-gray-700">{item.name}</h2>
                      <h5 className="text-gray-500 text-md mt-1">{item.description}</h5>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
