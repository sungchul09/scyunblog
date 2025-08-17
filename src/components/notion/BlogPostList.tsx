import { css } from "@/styled-system/css";
import BlogPostCard from "@/src/components/notion/BlogPostCard";

export default function BlogPostList({ posts }: { posts: any[] }) {
  return (
    <div className={css({
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    })}>
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  )
}