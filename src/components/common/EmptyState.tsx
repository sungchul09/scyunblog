import { css } from "@/styled-system/css"

export default function EmptyState({
  searchQuery,
  selectedTags
}: {
  searchQuery: string
  selectedTags: string[]
}) {
  const hasFilters = searchQuery || selectedTags.length > 0

  return (
    <div className={css({
      textAlign: 'center',
      padding: '3rem 1rem',
      color: 'gray.500'
    })}>
      <div className={css({
        fontSize: '3rem',
        marginBottom: '1rem'
      })}>
        {hasFilters ? '🔍' : '📝'}
      </div>
      <h3 className={css({
        fontSize: '1.25rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
        color: 'gray.700'
      })}>
        {hasFilters ? '검색 결과가 없습니다' : '게시글이 없습니다'}
      </h3>
      <p className={css({
        fontSize: '0.875rem'
      })}>
        {hasFilters 
          ? '다른 검색어나 태그를 시도해보세요'
          : '첫 번째 게시글을 작성해보세요'
        }
      </p>
    </div>
  )
}
