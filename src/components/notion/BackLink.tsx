import Link from 'next/link'
import { css } from '@/styled-system/css'

interface BackLinkProps {
  href: string
  children: React.ReactNode
}

export default function BackLink({ href, children }: BackLinkProps) {
  return (
    <Link 
      href={href}
      className={css({
        color: 'blue.600',
        display: 'inline-block',
        marginBottom: '1rem',
        transition: 'color 0.2s ease',
        _hover: {
          color: 'blue.800'
        }
      })}
    >
      {children}
    </Link>
  )
}