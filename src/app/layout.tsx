import Provider from '@/components/Provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { Session } from 'next-auth'

import Header from '@/components/layouts/Header'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" className='dark'>
      <Provider session={session}>
        <body className="container mx-auto bg-[#EFEFEF] dark:bg-[#0e0e0e]">
          <Header />
          {children}
        </body>
      </Provider>
    </html>
  )
}
