import type { Metadata } from 'next'
import '@/src/app/reset.css'
import '@/src/app/globals.css'
import { css } from '@/styled-system/css'
import Header from '@/src/components/Header'

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
    <html lang="ko">
      <body className={bodyStyles}>
        <Header className={headerHideOnPrint} />
        <section>{children}</section>
      </body>
    </html>
  )
}

const bodyStyles = css({
  fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
})

const headerHideOnPrint = css({
  '@media print': {
    display: 'none',
  },
})

const sectionStyles = css({
  backgroundColor: 'systemLightGray',
  width: '100%',
  height: '100dvh',
})
