import { css } from '@/styled-system/css'
import { Block } from '@/src/components/notion/BlockRenderer'
import RichText from '@/src/components/notion/Blocks/RichText'

export function CalloutBlock({ block }: { block: Block }) {
  const callout = block.callout
  const icon = callout?.icon?.emoji || '💡'
  const color = callout?.color || 'gray'
  
  const colorStyles = {
    gray: { bg: '#F9FAFB', border: '#E5E7EB' },
    blue: { bg: '#EFF6FF', border: '#DBEAFE' },
    green: { bg: '#F0FDF4', border: '#BBF7D0' },
    yellow: { bg: '#FFFBEB', border: '#FDE68A' },
    red: { bg: '#FEF2F2', border: '#FECACA' },
    purple: { bg: '#FAF5FF', border: '#E9D5FF' },
    orange: { bg: '#FFF7ED', border: '#FDBA74' },
    pink: { bg: '#FDF2F8', border: '#FBCFE8' }
  }
  
  const style = colorStyles[color as keyof typeof colorStyles] || colorStyles.gray

  return (
    <div
      className={css({
        margin: '1.5rem 0', // 🎯 여백 증가
        padding: '1rem',
        borderRadius: '0.5rem',
        borderLeft: '4px solid',
        display: 'flex',
        gap: '0.75rem'
      })}
      style={{
        backgroundColor: style.bg,
        borderLeftColor: style.border
      }}
    >
      <span className={css({
        fontSize: '1.25rem',
        flexShrink: 0
      })}>
        {icon}
      </span>
      <div className={css({
        flex: 1,
        lineHeight: '1.6'
      })}>
        <RichText richText={callout?.rich_text} />
      </div>
    </div>
  )
}

export function QuoteBlock({ block }: { block: Block }) {
  return (
    <blockquote className={css({
      borderLeft: '4px solid token(colors.blue.400)',
      paddingLeft: '1.5rem',
      margin: '1.5rem 0', // 🎯 여백 증가
      fontStyle: 'italic',
      fontSize: '1.125rem',
      color: 'gray.700',
      backgroundColor: 'blue.50',
      padding: '1rem 1.5rem',
      borderRadius: '0 0.5rem 0.5rem 0'
    })}>
      <RichText richText={block.quote?.rich_text} />
    </blockquote>
  )
}

export function DividerBlock() {
  return (
    <hr className={css({
      margin: '2.5rem 0', // 🎯 여백 유지
      border: 'none',
      borderTop: '2px solid token(colors.gray.200)',
      position: 'relative',
      _after: {
        content: '"◆"',
        position: 'absolute',
        top: '-0.75rem',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        color: 'gray.400',
        padding: '0 1rem',
        fontSize: '0.875rem'
      }
    })} />
  )
}

export function ColumnListBlock({ block }: { block: Block }) {
  return (
    <div className={css({
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      margin: '1.5rem 0' // 🎯 여백 증가
    })}>
      {/* 실제 컬럼 내용은 하위 블록에서 처리 */}
    </div>
  )
}

export function ColumnBlock({ block }: { block: Block }) {
  return (
    <div className={css({
      padding: '1rem',
      border: '1px solid token(colors.gray.200)',
      borderRadius: '0.5rem',
      backgroundColor: 'gray.50'
    })}>
      {/* 컬럼 내부 블록들이 여기에 렌더링됨 */}
    </div>
  )
}

// 🎯 빈 블록 처리 추가
export function EmptyBlock() {
  return (
    <div className={css({
      height: '1rem', // 빈 줄 높이
      marginBottom: '1rem'
    })} />
  )
}