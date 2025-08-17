'use client'

import { css } from '@/styled-system/css'
import Tag from '@/src/components/notion/Tag'

interface TagItem {
  id: string
  name: string
  color: string
}

interface TagSelectorProps {
  availableTags: TagItem[]
  selectedTags: string[]
  onTagToggle: (tagName: string) => void
  isOpen: boolean
}

export default function TagSelector({ 
  availableTags, 
  selectedTags, 
  onTagToggle, 
  isOpen 
}: TagSelectorProps) {
  if (!isOpen) return null

  return (
    <div className={css({
      padding: '1rem',
      backgroundColor: 'gray.50',
      borderRadius: '0.5rem',
      border: '1px solid token(colors.gray.200)'
    })}>
      <div className={css({
        fontSize: '0.875rem',
        color: 'gray.600',
        marginBottom: '0.75rem'
      })}>
        태그를 선택하세요:
      </div>
      <div className={css({
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem'
      })}>
        {availableTags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => onTagToggle(tag.name)}
            className={css({
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              opacity: selectedTags.includes(tag.name) ? 1 : 0.6,
              transform: selectedTags.includes(tag.name) ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.2s ease',
              _hover: {
                opacity: 1,
                transform: 'scale(1.05)'
              }
            })}
          >
            <Tag name={tag.name} color={tag.color} />
          </button>
        ))}
      </div>
    </div>
  )
}