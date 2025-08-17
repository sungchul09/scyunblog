import { css } from '@/styled-system/css'
import { Block } from '@/src/components/notion/BlockRenderer'
import RichText from '@/src/components/notion/Blocks/RichText'

export function BulletedListBlock({ block }: { block: Block }) {
  return (
    <li className={css({
      marginBottom: '0.5rem', // 🎯 리스트 아이템 간격 증가
      paddingLeft: '1.5rem',
      position: 'relative',
      lineHeight: '1.6',
      _before: {
        content: '"•"',
        position: 'absolute',
        left: '0.5rem',
        color: 'blue.600',
        fontWeight: 'bold'
      }
    })}>
      <RichText richText={block.bulleted_list_item?.rich_text} />
    </li>
  )
}

export function NumberedListBlock({ block }: { block: Block }) {
  return (
    <li className={css({
      marginBottom: '0.5rem', // 🎯 리스트 아이템 간격 증가
      paddingLeft: '2rem',
      listStyleType: 'decimal',
      listStylePosition: 'outside',
      lineHeight: '1.6',
      _marker: {
        color: 'blue.600',
        fontWeight: 'bold'
      }
    })}>
      <RichText richText={block.numbered_list_item?.rich_text} />
    </li>
  )
}

export function TodoBlock({ block }: { block: Block }) {
  const isChecked = block.to_do?.checked
  
  return (
    <div className={css({
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.5rem',
      marginBottom: '0.75rem', // 🎯 체크박스 간격 증가
      lineHeight: '1.6'
    })}>
      <input
        type="checkbox"
        checked={isChecked}
        readOnly
        className={css({
          marginTop: '0.125rem',
          accentColor: 'blue.600'
        })}
      />
      <span className={css({
        textDecoration: isChecked ? 'line-through' : 'none',
        color: isChecked ? 'gray.500' : 'gray.800'
      })}>
        <RichText richText={block.to_do?.rich_text} />
      </span>
    </div>
  )
}