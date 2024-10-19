import { createBrowserRouter, RouteObject } from "react-router-dom";
import { MdDashboard, MdEnergySavingsLeaf } from "react-icons/md";
import { GiLevelFourAdvanced, GiTakeMyMoney } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { SiGotomeeting } from "react-icons/si";
import { FaUsersCog } from "react-icons/fa";
import Dashboard from "../../pages/dashboard";
import Chamas from "../../pages/chamas";
import { IconType } from "react-icons";
import Meetings from "../../pages/meetings";
import Members from "../../pages/members";
import Savings from "../../pages/savings";
import Advances from "../../pages/advances";
import Loans from "../../pages/loans";
import Transactions from "../../pages/transactions";

export const sidebarlinks: {link: string, title: string, icon: IconType }[] = [
    {
        link: '/',
        title: 'Dashboard',
        icon: MdDashboard
    },
    {
        link: '/meetings',
        title: 'Meetings',
        icon: SiGotomeeting
    },
    {
        link: '/members',
        title: 'Members',
        icon: FaUsersCog
    },
    {
        link: '/savings',
        title: 'Savings',
        icon: MdEnergySavingsLeaf
    },
    {
        link: '/advances',
        title: 'Advances', 
        icon: GiLevelFourAdvanced
    },
    {
        link: '/loans',
        title: 'Loans',
        icon: GiTakeMyMoney
    },
    {
        link: '/chamas',
        title: 'Chamas',
        icon: GiTakeMyMoney
    }, 
    {
        link: '/transactions',
        title: 'Transactions',
        icon: FaMoneyBillTransfer
    }
]

export const paths = [
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: '/meetings',
        element: <Meetings />
    },
    {
        path: '/members',
        element: <Members />
    },
    {
        path: '/savings',
        element: <Savings />
    },
    {
        path: '/advances',
        element: <Advances />
    },
    {
        path: '/loans',
        element: <Loans />
    },
    {
        path: '/chamas',
        element: <Chamas />
    },
    {
        path: '/transactions',
        element: <Transactions />
    }
] satisfies RouteObject[]

export const routes = createBrowserRouter(paths)