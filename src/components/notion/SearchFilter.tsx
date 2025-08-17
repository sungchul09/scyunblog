
'use client'

import { useState } from 'react'
import { css } from '@/styled-system/css'
import SearchInput from '@/src/components/notion/filter/SearchInput'
import SelectedTags from '@/src/components/notion/filter/SelectedTags'
import TagSelector from '@/src/components/notion/filter/TagSelector'
import FilterActions from '@/src/components/notion/filter/FilterActions'

interface TagItem {
  id: string
  name: string
  color: string
}

interface SearchFilterProps {
  onSearchChange: (query: string) => void
  onTagFilter: (tagNames: string[]) => void
  availableTags: TagItem[]
  selectedTags: string[]
  searchQuery: string
}

export default function SearchFilter({
  onSearchChange,
  onTagFilter,
  availableTags,
  selectedTags,
  searchQuery
}: SearchFilterProps) {
  const [isTagFilterOpen, setIsTagFilterOpen] = useState(false)

  const handleTagToggle = (tagName: string) => {
    const newSelectedTags = selectedTags.includes(tagName)
      ? selectedTags.filter(name => name !== tagName)
      : [...selectedTags, tagName]
    
    onTagFilter(newSelectedTags)
  }

  const clearAllFilters = () => {
    onSearchChange('')
    onTagFilter([])
  }

  const hasActiveFilters = searchQuery || selectedTags.length > 0

  return (
    <div className={css({
      marginBottom: '2rem',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      border: '1px solid token(colors.gray.200)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    })}>
      {/* 검색 입력 */}
      <div className={css({
        marginBottom: '1rem'
      })}>
        <SearchInput 
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      </div>

      {/* 태그 필터 */}
      <div>
        <FilterActions
          isTagFilterOpen={isTagFilterOpen}
          onToggleTagFilter={() => setIsTagFilterOpen(!isTagFilterOpen)}
          hasActiveFilters={!!searchQuery || selectedTags.length > 0}
          onClearAllFilters={clearAllFilters}
        />

        <SelectedTags
          selectedTags={selectedTags}
          availableTags={availableTags}
          onTagRemove={handleTagToggle}
        />

        <TagSelector
          availableTags={availableTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          isOpen={isTagFilterOpen}
        />
      </div>
    </div>
  )
}