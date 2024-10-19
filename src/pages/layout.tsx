import { ReactNode, useRef } from "react";
import Sidebar from "../components/layouts/sidebar";
import LoadingBar from "react-top-loading-bar";

const Layout = ({children}: {children: ReactNode}) => {
    const ref = useRef(null)
    return (
        <main className="relative ">
            <LoadingBar color='#f11946' ref={ref} />
            <Sidebar />
            <div className="relative w-[calc(100vw_-_14rem)] left-56 px-3">
                {children}
            </div>
        </main>
    );
}

export default Layout;
