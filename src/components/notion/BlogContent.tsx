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

        // 🎯 테이블 처리 - 첫 번째 행인지 확인
        if (block.type === 'table_row') {
          const isFirstRow = index === 0 || blocks[index - 1]?.type !== 'table_row'
          const hasColumnHeader = true
          
          return (
            <BlockRenderer 
              key={block.id} 
              block={block}
              isFirstRow={isFirstRow}
              hasColumnHeader={hasColumnHeader}
            />
          )
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