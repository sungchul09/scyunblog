import { Block } from '@/src/components/notion/BlockRenderer'
import { css } from '@/styled-system/css'

// 추가 블록 컴포넌트들
export default function EmbedBlock({ block }: { block: Block }) {
  const embed = block.embed
  const url = embed?.url

  if (!url) return null

  return (
    <div className={css({
      margin: '1.5rem 0',
      border: '1px solid token(colors.gray.300)',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    })}>
      <iframe
        src={url}
        className={css({
          width: '100%',
          height: '400px',
          border: 'none'
        })}
        title="Embedded content"
      />
    </div>
  )
}
