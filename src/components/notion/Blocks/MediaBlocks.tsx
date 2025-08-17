import { css } from '@/styled-system/css'
import { Block } from '@/src/components/notion/BlockRenderer'
import RichText from '@/src/components/notion/Blocks/RichText'

export function ImageBlock({ block }: { block: Block }) {
  const image = block.image
  const src = image?.external?.url || image?.file?.url
  const caption = image?.caption

  if (!src) return null

  return (
    <figure className={css({
      margin: '1.5rem 0',
      textAlign: 'center'
    })}>
      <img
        src={src}
        alt={caption?.[0]?.plain_text || ''}
        className={css({
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        })}
      />
      {caption && caption.length > 0 && (
        <figcaption className={css({
          marginTop: '0.5rem',
          fontSize: '0.875rem',
          color: 'gray.600',
          fontStyle: 'italic'
        })}>
          <RichText richText={caption} />
        </figcaption>
      )}
    </figure>
  )
}

export function VideoBlock({ block }: { block: Block }) {
  const video = block.video
  const src = video?.external?.url || video?.file?.url
  const caption = video?.caption

  if (!src) return null

  return (
    <figure className={css({
      margin: '1.5rem 0',
      textAlign: 'center'
    })}>
      <video
        controls
        className={css({
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '0.5rem'
        })}
      >
        <source src={src} />
        동영상을 재생할 수 없습니다.
      </video>
      {caption && caption.length > 0 && (
        <figcaption className={css({
          marginTop: '0.5rem',
          fontSize: '0.875rem',
          color: 'gray.600',
          fontStyle: 'italic'
        })}>
          <RichText richText={caption} />
        </figcaption>
      )}
    </figure>
  )
}

export function FileBlock({ block }: { block: Block }) {
  const file = block.file
  const src = file?.external?.url || file?.file?.url
  const name = file?.name || '파일'

  if (!src) return null

  return (
    <div className={css({
      margin: '1rem 0',
      padding: '1rem',
      border: '1px solid token(colors.gray.300)',
      borderRadius: '0.5rem',
      backgroundColor: 'gray.50'
    })}>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'blue.600',
          textDecoration: 'none',
          _hover: {
            textDecoration: 'underline'
          }
        })}
      >
        <span>📎</span>
        <span>{name}</span>
      </a>
    </div>
  )
}