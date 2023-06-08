import Provider from '@/components/Provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { Session } from 'next-auth'

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
    <html lang="en">
      <Provider session={session}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
