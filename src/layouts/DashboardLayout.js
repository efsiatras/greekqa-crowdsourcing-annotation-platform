import Sidebar from 'components/Dashboard/Sidebar/Sidebar'
import MobileSidebar from 'components/Dashboard/Sidebar/MobileSidebar'

export default function DashboardLayout({ title, content }) {
    return (
        <div className="flex h-screen">
            <div className="hidden md:flex">
                <Sidebar  />
                </div>
            <div className="sticky md:hidden">
                <MobileSidebar />
            </div>
            <main className="relative flex-1 overflow-y-auto w-full px-12 pt-12 p-2">
                <h2 className="mb-6 text-3xl font-medium text-navy-600 select-none">{title}</h2>
                {content}
            </main>
        </div>
    );
}