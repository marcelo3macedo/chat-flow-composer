import { FiGitPullRequest, FiSettings } from "react-icons/fi";
import navItemsJson from "../assets/mocks/navItems.json";

const iconMap = {
  FiGitPullRequest,
  FiSettings,
} as any;


export function getMenu() {
    return navItemsJson.map(item => ({
        ...item,
        icon: iconMap[item.icon],
    }));
}