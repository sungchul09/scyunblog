import Link from 'next/link'
import { css } from '@/styled-system/css'
import TagList from '@/src/components/notion/TagList'

interface TagItem {
  id: string
  name: string
  color: string
}

interface Post {
  id: string
  title: string
  createdTime: string
  lastEditedTime: string
  url: string
  tags: TagItem[]
}

interface BlogPostCardProps {
  post: Post
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div 
      className={css({
        border: '1px solid token(colors.gray.200)',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        transition: 'all 0.3s ease',
        background: 'white',
        _hover: {
          boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(-2px)',
          borderColor: 'blue.200'
        }
      })}
    >
      <Link href={`/blog/${post.id}`}>
        <h2 className={css({
          fontSize: '1.25rem',
          fontWeight: '600',
          color: 'gray.900',
          cursor: 'pointer',
          marginBottom: '0.5rem',
          lineHeight: '1.4',
          _hover: {
            color: 'blue.600'
          }
        })}>
          {post.title}
        </h2>
      </Link>
      
      <PostMetadata 
        createdTime={post.createdTime}
        lastEditedTime={post.lastEditedTime}
      />
      
      <TagList tags={post.tags} />
    </div>
  )
}

// 게시글 메타데이터 컴포넌트
function PostMetadata({ createdTime, lastEditedTime }: { 
  createdTime: string
  lastEditedTime: string 
}) {
  return (
    <div className={css({
      color: 'gray.500',
      fontSize: '0.875rem',
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '0.5rem'
    })}>
      <span className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem'
      })}>
        📅 {new Date(createdTime).toLocaleDateString('ko-KR')}
      </span>
      {createdTime !== lastEditedTime && (
        <span className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        })}>
          ✏️ {new Date(lastEditedTime).toLocaleDateString('ko-KR')}
        </span>
      )}
    </div>
  )
}