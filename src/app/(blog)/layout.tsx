import Provider from '@/components/Provider'
import './globals.css'
import { Session } from 'next-auth'

import Header from '@/components/layouts/Header'
import Sidebar from '@/components/layouts/Sidebar/Sidebar'

import MobileSidebar from '@/components/layouts/Sidebar/MobileSidebar'
import SearchBar from '@/components/layouts/SearchBar'



export const metadata = {
  title: 'erayates.dev | Dev Blog',
  description: 'A blog about web development and programming.',
}

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session: Session
}) {
  return (
    <html lang="en">
      <Provider session={session}>
          <body className="mx-8 lg:container lg:mx-auto bg-[#EFEFEF] dark:bg-[#0e0e0e] grid grid-cols-12">
            <Header />
            <MobileSidebar />
            <Sidebar />
            <main>
              <SearchBar />
              {children}
            </main>
          </body>
      </Provider>
    </html>
  )
}
