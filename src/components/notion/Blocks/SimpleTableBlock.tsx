import { Block } from '@/src/components/notion/BlockRenderer'
import { css } from '@/styled-system/css'

export default function SimpleTableBlock({ block }: { block: Block }) {
  return (
    <div className={css({
      margin: '1.5rem 0',
      overflow: 'auto',
      borderRadius: '0.5rem',
      border: '1px solid token(colors.gray.200)',
      backgroundColor: 'white'
    })}>
      <div className={css({
        fontSize: '0.875rem',
        color: 'gray.600',
        padding: '0.5rem',
        backgroundColor: 'gray.50',
        borderBottom: '1px solid token(colors.gray.200)'
      })}>
        📊 테이블 (행 수: {block.table?.table_width || '알 수 없음'})
      </div>
      {/* 실제 테이블 행들은 하위 table_row 블록에서 렌더링됨 */}
    </div>
  )
}