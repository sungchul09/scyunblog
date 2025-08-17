import { css } from '@/styled-system/css'

interface PageLayoutProps {
  children: React.ReactNode
  maxWidth?: string
}

export default function PageLayout({ 
  children, 
  maxWidth = '1200px' 
}: PageLayoutProps) {
  return (
    <div className={css({
      maxWidth,
      margin: '0 auto',
      padding: '2rem 1rem'
    })}>
      {children}
    </div>
  )
}