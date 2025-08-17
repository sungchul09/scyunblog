import { css } from "@/styled-system/css";

export default function EmptyState() {
  return (
    <p className={css({
      color: 'gray.500',
      textAlign: 'center',
      fontSize: '1.125rem',
      marginTop: '2rem'
    })}>
      게시글이 없습니다.
    </p>
  )
}