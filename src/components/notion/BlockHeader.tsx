import { css } from "@/styled-system/css";
import PageTitle from "@/src/components/notion/PageTitle";
import BlogMetadata from "@/src/components/notion/BlogMetadata";
import TagList from "@/src/components/notion/TagList";

// 블로그 헤더 (제목 + 메타데이터)
export default function BlogHeader({ post }: { post: any }) {
  return (
    <header className={css({ marginBottom: '2rem' })}>
      <PageTitle size="2xl">{post.title}</PageTitle>
      
      <div className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: '1rem'
      })}>
        <BlogMetadata 
          createdTime={post.createdTime}
          lastEditedTime={post.lastEditedTime}
        />
        
        {post.tags && post.tags.length > 0 && (
          <TagList tags={post.tags} />
        )}
      </div>
      
      <hr className={css({
        border: 'none',
        borderTop: '1px solid token(colors.gray.200)',
        margin: '1.5rem 0'
      })} />
    </header>
  )
}