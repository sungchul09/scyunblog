import { css } from '@/styled-system/css'
import { Block } from '@/src/components/notion/BlockRenderer'
import RichText from '@/src/components/notion/Blocks/RichText'

export function TableBlock({ block }: { block: Block }) {
  const table = block.table
  const hasColumnHeader = table?.has_column_header
  const hasRowHeader = table?.has_row_header

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
        {/* 테이블 내용은 하위 TableRowBlock에서 처리 */}
      </table>
    </div>
  )
}

export function TableRowBlock({ 
  block, 
  isFirstRow = false, 
  hasColumnHeader = false 
}: { 
  block: Block
  isFirstRow?: boolean
  hasColumnHeader?: boolean 
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
      {cells.map((cell: any[], index: number) => {
        const CellComponent = isHeaderRow ? 'th' : 'td'
        
        return (
          <CellComponent
            key={index}
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
            <RichText richText={cell} />
          </CellComponent>
        )
      })}
    </tr>
  )
}