'use client'

import { css } from '@/styled-system/css'
import Tag from '@/src/components/notion/Tag'

interface TagItem {
  id: string
  name: string
  color: string
}

interface SelectedTagsProps {
  selectedTags: string[]
  availableTags: TagItem[]
  onTagRemove: (tagName: string) => void
}

export default function SelectedTags({ 
  selectedTags, 
  availableTags, 
  onTagRemove 
}: SelectedTagsProps) {
  if (selectedTags.length === 0) return null

  return (
    <div className={css({
      marginBottom: '0.75rem'
    })}>
      <div className={css({
        fontSize: '0.875rem',
        color: 'gray.600',
        marginBottom: '0.5rem'
      })}>
        선택된 태그:
      </div>
      <div className={css({
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem'
      })}>
        {selectedTags.map((tagName) => {
          const tag = availableTags.find(t => t.name === tagName)
          return tag ? (
            <div
              key={tagName}
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              })}
            >
              <Tag name={tag.name} color={tag.color} />
              <button
                onClick={() => onTagRemove(tagName)}
                className={css({
                  width: '1rem',
                  height: '1rem',
                  borderRadius: '50%',
                  backgroundColor: 'red.500',
                  color: 'white',
                  border: 'none',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  _hover: {
                    backgroundColor: 'red.600'
                  }
                })}
              >
                ×
              </button>
            </div>
          ) : null
        })}
      </div>
    </div>
  )
}