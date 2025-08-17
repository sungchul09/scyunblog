import { css } from '@/styled-system/css'
import Tag from '@/src/components/notion/Tag'

interface TagItem {
  id: string
  name: string
  color: string
}

interface TagFilterProps {
  tags: TagItem[]
  selectedTags: string[]
  onTagSelect: (tagName: string) => void
}

export default function TagFilter({ tags, selectedTags, onTagSelect }: TagFilterProps) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className={css({
      marginBottom: '2rem',
      padding: '1rem',
      backgroundColor: 'gray.50',
      borderRadius: '0.5rem'
    })}>
      <h3 className={css({
        fontSize: '0.875rem',
        fontWeight: '600',
        color: 'gray.700',
        marginBottom: '0.75rem'
      })}>
        태그로 필터링
      </h3>
      
      <div className={css({
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem'
      })}>
        {tags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => onTagSelect(tag.name)}
            className={css({
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              opacity: selectedTags.includes(tag.name) ? 1 : 0.6,
              _hover: { opacity: 1 }
            })}
          >
            <Tag name={tag.name} color={tag.color} />
          </button>
        ))}
      </div>
    </div>
  )
}