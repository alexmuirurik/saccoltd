import { ReactNode } from "react";
import Sidebar from "./sidebar";
import NavBar from "./navbar";

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <main className="relative ">
            <Sidebar />
            <div className="relative flex flex-col justify-center w-[calc(100vw_-_15rem)] left-56 px-4">
                <NavBar />
                {children}
            </div>
        </main>
    );
}

export default Layout;
