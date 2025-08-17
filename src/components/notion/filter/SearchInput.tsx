'use client'

import { css } from '@/styled-system/css'

interface SearchInputProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export default function SearchInput({ searchQuery, onSearchChange }: SearchInputProps) {
  return (
    <div className={css({
      position: 'relative'
    })}>
      <input
        type="text"
        placeholder="제목으로 검색..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className={css({
          width: '100%',
          padding: '0.75rem 1rem 0.75rem 2.5rem',
          border: '1px solid token(colors.gray.300)',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          transition: 'all 0.2s ease',
          _focus: {
            outline: 'none',
            borderColor: 'blue.500',
            boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
          }
        })}
      />
      <span className={css({
        position: 'absolute',
        left: '0.75rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'gray.400',
        fontSize: '1.25rem'
      })}>
        🔍
      </span>
    </div>
  )
}
