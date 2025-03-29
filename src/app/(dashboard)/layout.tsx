import Navbar from '@/components/layouts/navbar'
import Sidebar from '@/components/layouts/sidebar'
import { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="relative ">
            <Sidebar />
            <div className="relative flex flex-col justify-center w-[calc(100vw_-_15rem)] left-56 px-4">
                <Navbar />
                {children}
            </div>
        </main>
    )
}

export default DashboardLayout
