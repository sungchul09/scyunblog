import { css } from "@/styled-system/css"

export default function BlogMetadata({ 
  createdTime, 
  lastEditedTime 
}: { 
  createdTime: string
  lastEditedTime: string 
}) {
  return (
    <div className={css({
      color: 'gray.500',
      fontSize: '0.875rem',
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap'
    })}>
      <span className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      })}>
        📅 작성일: {new Date(createdTime).toLocaleDateString('ko-KR')}
      </span>
      {createdTime !== lastEditedTime && (
        <span className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        })}>
          ✏️ 수정일: {new Date(lastEditedTime).toLocaleDateString('ko-KR')}
        </span>
      )}
    </div>
  )
}