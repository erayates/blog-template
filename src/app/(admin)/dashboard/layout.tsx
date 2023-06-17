import Sidebar from '@/components/dashboard/layouts/Sidebar'
import './globals.css'
import Header from '@/components/dashboard/layouts/Header'

export const metadata = {
    title: 'erayates.dev | Admin Dashboard',
}


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
        </>
    )
}
