import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/src/app/reset.css'
import '@/src/app/globals.css'
import { css } from '@/styled-system/css'
import Header from '@/src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'scyunblog',
  description: 'welcome to scyunblog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <section>{children}</section>
      </body>
    </html>
  )
}

const sectionStyles = css({
  backgroundColor: 'systemLightGray',
  width: '100%',
  height: '100dvh',
})
