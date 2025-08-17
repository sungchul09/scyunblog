import { css } from "@/styled-system/css";

export default function UnsupportedBlock({ type }: { type: string }) {
  return (
    <div className={css({
      margin: '0.5rem 0',
      padding: '0.75rem',
      backgroundColor: 'yellow.50',
      border: '1px solid token(colors.yellow.200)',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      color: 'yellow.800'
    })}>
      ⚠️ 지원하지 않는 블록 타입: <code>{type}</code>
    </div>
  )
}