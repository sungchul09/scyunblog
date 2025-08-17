import { css } from '@/styled-system/css'

interface PageTitleProps {
  children: React.ReactNode
  size?: 'lg' | 'xl' | '2xl'
}

export default function PageTitle({ children, size = 'xl' }: PageTitleProps) {
  const sizeStyles = {
    lg: { fontSize: '1.5rem' },
    xl: { fontSize: '1.875rem' },
    '2xl': { fontSize: '2.25rem' }
  }

  return (
    <h1 className={css({
      fontWeight: 'bold',
      marginBottom: '2rem',
      ...sizeStyles[size]
    })}>
      {children}
    </h1>
  )
}