import NavMenu from "./navmenu";
import { AiFillAlipayCircle } from "react-icons/ai";

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between border rounded-md w-full h-12 mb-2 ">
            <div className="flex items-center gap-2 text-neutral-700 px-3">
                <AiFillAlipayCircle className="h-6 w-6" />
                <span className="font-mono font-bold">Alex Muiruri</span>
            </div> 
            <NavMenu />
        </nav>
    );
}

export default NavBar;
