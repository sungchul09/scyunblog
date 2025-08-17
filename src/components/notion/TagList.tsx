// src/components/TagList.tsx
import { css } from '@/styled-system/css'
import Tag from '@/src/components/notion/Tag'

interface TagItem {
  id: string
  name: string
  color: string
}

interface TagListProps {
  tags: TagItem[]
}

export default function TagList({ tags }: TagListProps) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className={css({
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginTop: '0.75rem'
    })}>
      {tags.map((tag) => (
        <Tag 
          key={tag.id} 
          name={tag.name} 
          color={tag.color} 
        />
      ))}
    </div>
  )
}