import { css } from "@/styled-system/css"

export default function SearchResultInfo({
  totalPosts,
  filteredPosts,
  searchQuery,
  selectedTags
}: {
  totalPosts: number
  filteredPosts: number
  searchQuery: string
  selectedTags: string[]
}) {
  const hasFilters = searchQuery || selectedTags.length > 0

  if (!hasFilters) return null

  return (
    <div className={css({
      marginBottom: '1.5rem',
      padding: '0.75rem 1rem',
      backgroundColor: 'blue.50',
      borderRadius: '0.5rem',
      border: '1px solid token(colors.blue.200)'
    })}>
      <span className={css({
        fontSize: '0.875rem',
        color: 'blue.700'
      })}>
        📊 {filteredPosts}개의 게시글이 검색되었습니다 (전체 {totalPosts}개)
      </span>
    </div>
  )
}
