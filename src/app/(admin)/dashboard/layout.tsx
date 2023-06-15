import Sidebar from '@/components/layouts/Admin/Sidebar'
import './globals.css'
import Header from '@/components/layouts/Admin/Header'

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
