import { css } from "@/styled-system/css";

export default function ErrorBlock({ type, error }: { type: string, error: any }) {
  return (
    <div className={css({
      margin: '0.5rem 0',
      padding: '0.75rem',
      backgroundColor: 'red.50',
      border: '1px solid token(colors.red.200)',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      color: 'red.800'
    })}>
      ⚠️ 오류가 발생했습니다: {error.message}
    </div>
  )
}