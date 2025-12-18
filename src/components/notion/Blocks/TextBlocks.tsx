// src/components/notion/blocks/TextBlocks.tsx
import { css } from '@/styled-system/css'
import { Block } from '../BlockRenderer'
import RichText from './RichText'

export function ParagraphBlock({ block }: { block: Block }) {
  // 빈 블록 처리
  const isEmpty = !block.paragraph?.rich_text || block.paragraph.rich_text.length === 0

  if (isEmpty) {
    return (
      <div className={css({
        height: '1rem', // 빈 줄 높이
        marginBottom: '1rem'
      })} />
    )
  }

  return (
    <p className={css({
      fontSize: {
        base: '0.9375rem',
        md: '1rem'
      },
      marginBottom: '1rem',
      lineHeight: '1.6',
      color: 'gray.800',
      whiteSpace: 'pre-line'
    })}>
      <RichText richText={block.paragraph?.rich_text} />
    </p>
  )
}

export function Heading1Block({ block }: { block: Block }) {
  return (
    <h1
      className={css({
        fontSize: {
          base: '1.5rem',
          md: '2rem'
        },
        marginBottom: {
          base: '1rem',
          md: '1.5rem'
        },
        marginTop: {
          base: '1.5rem',
          md: '2.5rem'
        },
        color: 'gray.900',
        borderBottom: '2px solid token(colors.gray.200)',
        paddingBottom: '0.5rem',
        whiteSpace: 'pre-line'
      })}
      style={{ fontWeight: 'bold' }} // 🎯 인라인 스타일로 강제 적용
    >
      <RichText richText={block.heading_1?.rich_text} />
    </h1>
  )
}

export function Heading2Block({ block }: { block: Block }) {
  return (
    <h2
      className={css({
        fontSize: {
          base: '1.25rem',
          md: '1.5rem'
        },
        marginBottom: {
          base: '0.75rem',
          md: '1rem'
        },
        marginTop: {
          base: '1.25rem',
          md: '2rem'
        },
        color: 'gray.900',
        whiteSpace: 'pre-line'
      })}
      style={{ fontWeight: 'bold' }} // 🎯 인라인 스타일로 강제 적용
    >
      <RichText richText={block.heading_2?.rich_text} />
    </h2>
  )
}

export function Heading3Block({ block }: { block: Block }) {
  return (
    <h3
      className={css({
        fontSize: {
          base: '1.125rem',
          md: '1.25rem'
        },
        marginBottom: {
          base: '0.5rem',
          md: '0.75rem'
        },
        marginTop: {
          base: '1rem',
          md: '1.5rem'
        },
        color: 'gray.800',
        whiteSpace: 'pre-line'
      })}
      style={{ fontWeight: '600' }} // 🎯 인라인 스타일로 강제 적용
    >
      <RichText richText={block.heading_3?.rich_text} />
    </h3>
  )
}