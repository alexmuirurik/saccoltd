import { FaHome } from "react-icons/fa";
import Sidelist from "./sidelist";

const Sidebar = () => {
    return (
        <aside className="bg-teal-600 fixed border-e rounded-e-md w-56 h-svh">
            <div className="flex items-center gap-3 border-b border-gray-400 rounded-md w-full h-12 px-4">
                <FaHome className="text-white h-6 w-6" />
                <span className="text-lg text-white font-mono font-bold">Sacco Template</span>
            </div>
            <div className="py-4 space-y-1">
                <Sidelist />
            </div>
        </aside>
    );
}

export default Sidebar;
