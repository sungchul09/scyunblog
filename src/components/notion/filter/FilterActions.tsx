'use client'

import { css } from '@/styled-system/css'

interface FilterActionsProps {
  isTagFilterOpen: boolean
  onToggleTagFilter: () => void
  hasActiveFilters: boolean
  onClearAllFilters: () => void
}

export default function FilterActions({
  isTagFilterOpen,
  onToggleTagFilter,
  hasActiveFilters,
  onClearAllFilters
}: FilterActionsProps) {
  return (
    <div className={css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.75rem'
    })}>
      <button
        onClick={onToggleTagFilter}
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'gray.50',
          border: '1px solid token(colors.gray.200)',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          color: 'gray.700',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          _hover: {
            backgroundColor: 'gray.100'
          }
        })}
      >
        🏷️ 태그 필터
        <span className={css({
          fontSize: '0.75rem',
          transform: isTagFilterOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease'
        })}>
          ▼
        </span>
      </button>

      {hasActiveFilters && (
        <button
          onClick={onClearAllFilters}
          className={css({
            padding: '0.5rem 1rem',
            backgroundColor: 'red.50',
            border: '1px solid token(colors.red.200)',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
            color: 'red.600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            _hover: {
              backgroundColor: 'red.100'
            }
          })}
        >
          필터 초기화
        </button>
      )}
    </div>
  )
}