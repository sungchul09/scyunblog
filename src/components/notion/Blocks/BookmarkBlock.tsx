import { Block } from '@/src/components/notion/BlockRenderer'
import { css } from '@/styled-system/css'

export default function BookmarkBlock({ block }: { block: Block }) {
  const bookmark = block.bookmark
  const url = bookmark?.url
  const caption = bookmark?.caption

  if (!url) return null

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={css({
        display: 'block',
        margin: '1rem 0',
        padding: '1rem',
        border: '1px solid token(colors.gray.300)',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        _hover: {
          backgroundColor: 'gray.50',
          borderColor: 'blue.300'
        }
      })}
    >
      <div className={css({
        fontSize: '0.875rem',
        color: 'blue.600',
        marginBottom: '0.25rem'
      })}>
        🔗 {url}
      </div>
      {caption && caption.length > 0 && (
        <div className={css({
          fontSize: '0.875rem',
          color: 'gray.600'
        })}>
          {caption[0]?.plain_text}
        </div>
      )}
    </a>
  )
}