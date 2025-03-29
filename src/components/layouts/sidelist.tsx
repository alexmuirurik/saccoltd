'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { IconType } from 'react-icons';
import { FaUsersCog } from 'react-icons/fa';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { GiLevelFourAdvanced, GiTakeMyMoney } from 'react-icons/gi';
import { MdDashboard } from 'react-icons/md';

export const sidebarlinks: { link: string; title: string; icon: IconType }[] = [
    {
        link: '/',
        title: 'Dashboard',
        icon: MdDashboard,
    },
    {
        link: '/members',
        title: 'Members',
        icon: FaUsersCog,
    },
    {
        link: '/payments',
        title: 'Payments',
        icon: GiLevelFourAdvanced,
    },
    {
        link: '/loans',
        title: 'Loans',
        icon: GiTakeMyMoney,
    },
    {
        link: '/statements',
        title: 'Statements',
        icon: FaMoneyBillTransfer,
    },
]

const Sidelist = () => {
    const location = usePathname()
    console.log(location)
    return sidebarlinks.map((link) => {
        const active = link.link === location ? 'active' : ''
        return (
            <Link
                key={link.link}
                href={link.link}
                className={
                    active +
                    ' [&.active]:bg-teal-800 hover:bg-teal-800 flex items-center gap-3 rounded-sm w-full h-14 px-5'
                }
            >
                <link.icon className="text-white h-5 w-5" />
                <span className="text-sm text-white font-mono font-bold">
                    {link.title}
                </span>
            </Link>
        )
    })
}

export default Sidelist
