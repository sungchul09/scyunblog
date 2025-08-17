import { css } from "@/styled-system/css";

export default function LoadingSpinner() {
  return (
    <div className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: 'gray.500'
    })}>
      <div className={css({
        width: '1.5rem',
        height: '1.5rem',
        border: '2px solid token(colors.gray.200)',
        borderTop: '2px solid token(colors.blue.500)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      })} />
      <span className={css({
        fontSize: '0.875rem'
      })}>
        로딩 중...
      </span>
    </div>
  )
}