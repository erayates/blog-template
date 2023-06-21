import Sidebar from '@/components/dashboard/layouts/Sidebar'
import './globals.css'
import Header from '@/components/dashboard/layouts/Header'
import Provider from '@/components/Provider'
import { Session } from 'next-auth'

export const metadata = {
    title: 'erayates.dev | Admin Dashboard',
}


export default function DashboardLayout({
    children,
    session
}: {
    children: React.ReactNode,
    session: Session
}) {
    return (
        <html lang="en">
            <Provider session={session}>
                <body>
                <Header />
                <Sidebar />
                {children}
                </body>
            </Provider>
            
        </html>
        
    )
}
