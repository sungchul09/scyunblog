import { css } from '@/styled-system/css'

interface PageTitleProps {
  children: React.ReactNode
  size?: 'lg' | 'xl' | '2xl'
}

export default function PageTitle({ children, size = 'xl' }: PageTitleProps) {
  const sizeStyles = {
    lg: {
      fontSize: { base: '1.25rem', md: '1.5rem' }
    },
    xl: {
      fontSize: { base: '1.5rem', md: '1.875rem' }
    },
    '2xl': {
      fontSize: { base: '1.75rem', md: '2.25rem' }
    }
  }

  return (
    <h1 className={css({
      fontWeight: 'bold',
      marginBottom: { base: '1rem', md: '2rem' },
      ...sizeStyles[size]
    })}>
      {children}
    </h1>
  )
}