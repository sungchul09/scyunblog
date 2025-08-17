// 블록 타입별 컴포넌트 import
import { ParagraphBlock, Heading1Block, Heading2Block, Heading3Block } from '@/src/components/notion/Blocks/TextBlocks'
import { BulletedListBlock, NumberedListBlock, TodoBlock } from '@/src/components/notion/Blocks/ListBlocks'
import { ImageBlock, VideoBlock, FileBlock } from '@/src/components/notion/Blocks/MediaBlocks'
import { CalloutBlock, QuoteBlock, DividerBlock, ColumnListBlock, ColumnBlock } from '@/src/components/notion/Blocks/LayoutBlocks'
import { CodeBlock } from '@/src/components/notion/Blocks/CodeBlocks'
import { TableRowBlock } from '@/src/components/notion/Blocks/TableBlocks'
import EmbedBlock from '@/src/components/notion/Blocks/EmbedBlock'
import BookmarkBlock from '@/src/components/notion/Blocks/BookmarkBlock'
import UnsupportedBlock from '@/src/components/notion/Blocks/UnsupportedBlock'
import ErrorBlock from '@/src/components/notion/Blocks/ErrorBlcok'
import SimpleTableBlock from '@/src/components/notion/Blocks/SimpleTableBlock'

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

      // 🎯 테이블 블록 - 간단한 테이블 렌더링 추가
      case 'table':
        return <SimpleTableBlock block={block} />
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

