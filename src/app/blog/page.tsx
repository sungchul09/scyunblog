import { getPosts } from '@/src/lib/notion'
import PageLayout from '@/src/components/notion/PageLayout'
import PageTitle from '@/src/components/notion/PageTitle'
import BlogPostList from '@/src/components/notion/BlogPostList'
import EmptyState from '@/src/components/notion/EmptyState'

export default async function BlogPage() {
  const posts = await getPosts()
  
  return (
    <PageLayout>
      <PageTitle>블로그 포스트</PageTitle>
      <BlogPostList posts={posts} />
      {posts.length === 0 && <EmptyState />}
    </PageLayout>
  )
}
export const revalidate = 10 // 🎯 추가