import { Link, useLocation } from "react-router-dom";
import { sidebarlinks } from "./routes";


const Sidelist = () => {
    const location = useLocation()
    return sidebarlinks.map(link => {
        console.log(location.pathname)
        const active = (link.link === location.pathname) ? 'active' :  ''
        return <Link to={link.link} className={active + " [&.active]:sidebar-active hover:sidebar-active flex items-center gap-3 rounded-sm w-full h-14 px-5"}>
            <link.icon className="text-white h-5 w-5" />
            <span className="text-sm text-white font-mono font-bold">{link.title}</span>
        </Link>
    })
}

export default Sidelist;
