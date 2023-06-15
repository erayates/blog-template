import './globals.css'
export const metadata = {
    title: 'asd',
    description: 'A blog about web development and programming.',
}


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            {children}
        </>
    )
}
