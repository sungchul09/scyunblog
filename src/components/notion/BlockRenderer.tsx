// src/components/notion/BlockRenderer.tsx (업데이트됨)
import { css } from '@/styled-system/css'

// 블록 타입별 컴포넌트 import
import { ParagraphBlock, Heading1Block, Heading2Block, Heading3Block } from '@/src/components/notion/Blocks/TextBlocks'
import { BulletedListBlock, NumberedListBlock, TodoBlock } from '@/src/components/notion/Blocks/ListBlocks'
import { ImageBlock, VideoBlock, FileBlock } from '@/src/components/notion/Blocks/MediaBlocks'
import { CalloutBlock, QuoteBlock, DividerBlock, ColumnListBlock, ColumnBlock } from '@/src/components/notion/Blocks/LayoutBlocks'
import { CodeBlock } from '@/src/components/notion/Blocks/CodeBlocks'
import { TableBlock, TableRowBlock } from '@/src/components/notion/Blocks/TableBlocks'
import UnsupportedBlock from '@/src/components/notion/Blocks/UnsupportedBlock'
import ErrorBlock from '@/src/components/notion/Blocks/ErrorBlcok'

export interface Block {
  id: string
  type: string
  [key: string]: any
}

interface BlockRendererProps {
  block: Block
  // 테이블 관련 props
  isFirstRow?: boolean
  hasColumnHeader?: boolean
}

export default function BlockRenderer({ 
  block, 
  isFirstRow = false, 
  hasColumnHeader = false 
}: BlockRendererProps) {
  const { type } = block

  try {
    switch (type) {
      // 텍스트 블록
      case 'paragraph':
        return <ParagraphBlock block={block} />
      case 'heading_1':
        return <Heading1Block block={block} />
      case 'heading_2':
        return <Heading2Block block={block} />
      case 'heading_3':
        return <Heading3Block block={block} />

      // 리스트 블록
      case 'bulleted_list_item':
        return <BulletedListBlock block={block} />
      case 'numbered_list_item':
        return <NumberedListBlock block={block} />
      case 'to_do':
        return <TodoBlock block={block} />

      // 미디어 블록
      case 'image':
        return <ImageBlock block={block} />
      case 'video':
        return <VideoBlock block={block} />
      case 'file':
        return <FileBlock block={block} />

      // 레이아웃 블록
      case 'callout':
        return <CalloutBlock block={block} />
      case 'quote':
        return <QuoteBlock block={block} />
      case 'divider':
        return <DividerBlock />
      case 'column_list':
        return <ColumnListBlock block={block} />
      case 'column':
        return <ColumnBlock block={block} />

      // 코드 블록
      case 'code':
        return <CodeBlock block={block} />

      // 테이블 블록
      case 'table':
        return <TableBlock block={block} />
      case 'table_row':
        return (
          <TableRowBlock 
            block={block} 
            isFirstRow={isFirstRow}
            hasColumnHeader={hasColumnHeader}
          />
        )

      // 임베드 블록
      case 'embed':
        return <EmbedBlock block={block} />
      case 'bookmark':
        return <BookmarkBlock block={block} />

      // 지원하지 않는 블록
      default:
        return <UnsupportedBlock type={type} />
    }
  } catch (error) {
    console.error(`Error rendering block type ${type}:`, error)
    return <ErrorBlock type={type} error={error} />
  }
}

// 추가 블록 컴포넌트들
function EmbedBlock({ block }: { block: Block }) {
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

function BookmarkBlock({ block }: { block: Block }) {
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