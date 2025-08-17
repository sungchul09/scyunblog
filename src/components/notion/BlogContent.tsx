// src/components/notion/BlogContent.tsx (업데이트됨)
import { css } from '@/styled-system/css'
import BlockRenderer, { Block } from './BlockRenderer'

interface BlogContentProps {
  blocks: Block[]
}

export default function BlogContent({ blocks }: BlogContentProps) {
  return (
    <article className={css({
      maxWidth: 'none',
      lineHeight: '1.7',
      // 🎯 전체적인 여백 조정
      '& > *:first-child': {
        marginTop: '0'
      },
      '& > *:last-child': {
        marginBottom: '0'
      },
      // 🎯 블록 간 기본 간격 보장
      '& > * + *': {
        marginTop: '0.5rem'
      }
    })}>
      {blocks.map((block, index) => {
        // 🎯 빈 paragraph 블록 처리
        if (block.type === 'paragraph') {
          const isEmpty = !block.paragraph?.rich_text || block.paragraph.rich_text.length === 0
          if (isEmpty) {
            return (
              <div 
                key={block.id} 
                className={css({
                  height: '1rem',
                  marginBottom: '1rem'
                })} 
              />
            )
          }
        }

        // 🎯 테이블 처리 - 완전히 새로운 방식
        if (block.type === 'table') {
          return <TableGroup key={block.id} block={block} blocks={blocks} index={index} />
        }
        
        // 🎯 table_row는 TableGroup에서 처리하므로 개별 렌더링 건너뛰기
        if (block.type === 'table_row') {
          const prevBlock = blocks[index - 1]
          // 이전 블록이 table이거나 table_row면 이미 TableGroup에서 처리됨
          if (prevBlock && (prevBlock.type === 'table' || prevBlock.type === 'table_row')) {
            return null
          }
          // 단독 table_row (가능성 낮음)
          return <BlockRenderer key={block.id} block={block} />
        }

        // 🎯 리스트 그룹핑 처리
        if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
          return (
            <ListWrapper key={block.id} block={block} blocks={blocks} index={index} />
          )
        }

        // 🎯 일반 블록 렌더링
        return <BlockRenderer key={block.id} block={block} />
      })}
    </article>
  )
}

// 🎯 테이블 그룹 컴포넌트
function TableGroup({ 
  block, 
  blocks, 
  index 
}: { 
  block: Block
  blocks: Block[]
  index: number 
}) {
  // table 블록 다음의 모든 table_row 블록들 수집
  const tableRows = []
  for (let i = index + 1; i < blocks.length; i++) {
    if (blocks[i].type === 'table_row') {
      tableRows.push(blocks[i])
    } else {
      break
    }
  }

  const hasColumnHeader = block.table?.has_column_header || false

  return (
    <div className={css({
      margin: '1.5rem 0',
      overflow: 'auto',
      borderRadius: '0.5rem',
      border: '1px solid token(colors.gray.200)',
      backgroundColor: 'white'
    })}>
      <table className={css({
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.875rem'
      })}>
        <tbody>
          {tableRows.map((row, rowIndex) => (
            <TableRow 
              key={row.id} 
              block={row} 
              isFirstRow={rowIndex === 0}
              hasColumnHeader={hasColumnHeader}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

// 🎯 테이블 행 컴포넌트
function TableRow({ 
  block, 
  isFirstRow, 
  hasColumnHeader 
}: { 
  block: Block
  isFirstRow: boolean
  hasColumnHeader: boolean 
}) {
  const cells = block.table_row?.cells || []
  const isHeaderRow = isFirstRow && hasColumnHeader

  return (
    <tr className={css({
      borderBottom: '1px solid token(colors.gray.200)',
      _hover: {
        backgroundColor: 'gray.50'
      }
    })}>
      {cells.map((cell: any[], cellIndex: number) => {
        const CellComponent = isHeaderRow ? 'th' : 'td'
        
        return (
          <CellComponent
            key={cellIndex}
            className={css({
              padding: '0.75rem 1rem',
              textAlign: 'left',
              verticalAlign: 'top',
              borderRight: '1px solid token(colors.gray.200)',
              _last: {
                borderRight: 'none'
              },
              ...(isHeaderRow && {
                backgroundColor: 'gray.100',
                fontWeight: '600',
                color: 'gray.900'
              })
            })}
          >
            {cell.map((textItem: any, textIndex: number) => (
              <span key={textIndex}>{textItem.plain_text}</span>
            ))}
          </CellComponent>
        )
      })}
    </tr>
  )
}

// 리스트 그룹핑을 위한 래퍼 컴포넌트
function ListWrapper({ 
  block, 
  blocks, 
  index 
}: { 
  block: Block
  blocks: Block[]
  index: number 
}) {
  const isFirstListItem = index === 0 || blocks[index - 1]?.type !== block.type

  // 첫 번째 아이템이면 <ul> 또는 <ol> 시작
  if (isFirstListItem) {
    const ListTag = block.type === 'bulleted_list_item' ? 'ul' : 'ol'
    const listItems = []
    
    // 연속된 같은 타입의 리스트 아이템들 수집
    for (let i = index; i < blocks.length; i++) {
      if (blocks[i].type !== block.type) break
      listItems.push(blocks[i])
    }

    return (
      <ListTag className={css({
        margin: '1.5rem 0', // 🎯 리스트 전체 여백 증가
        paddingLeft: block.type === 'numbered_list_item' ? '1.5rem' : '0'
      })}>
        {listItems.map((item) => (
          <BlockRenderer key={item.id} block={item} />
        ))}
      </ListTag>
    )
  }

  // 첫 번째가 아니면 null (이미 위에서 렌더링됨)
  return null
}