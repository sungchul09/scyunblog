import { css } from '@/styled-system/css'

interface TagProps {
  name: string
  color: string
}

export default function Tag({ name, color }: TagProps) {
  const colorStyles = {
    gray: { backgroundColor: '#E5E7EB', color: '#374151' },
    brown: { backgroundColor: '#FEF3C7', color: '#92400E' },
    orange: { backgroundColor: '#FED7AA', color: '#C2410C' },
    yellow: { backgroundColor: '#FEF3C7', color: '#A16207' },
    green: { backgroundColor: '#D1FAE5', color: '#059669' },
    blue: { backgroundColor: '#DBEAFE', color: '#1D4ED8' },
    purple: { backgroundColor: '#E9D5FF', color: '#7C3AED' },
    pink: { backgroundColor: '#FCE7F3', color: '#BE185D' },
    red: { backgroundColor: '#FEE2E2', color: '#DC2626' },
    default: { backgroundColor: '#F3F4F6', color: '#6B7280' }
  }

  const tagStyle = colorStyles[color as keyof typeof colorStyles] || colorStyles.default

  return (
    <span
      className={css({
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        _hover: {
          transform: 'scale(1.05)'
        }
      })}
      style={tagStyle}
    >
      {name}
    </span>
  )
}