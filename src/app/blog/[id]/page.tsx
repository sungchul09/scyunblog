import { notFound } from 'next/navigation'
import { getPost } from '@/src/lib/notion'
import PageLayout from '@/src/components/notion/PageLayout'
import BackLink from '@/src/components/notion/BackLink'
import BlogArticle from '@/src/components/notion/BlogArticle'

interface PageProps {
  params: {
    id: string
  }
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPost(params.id)
  
  if (!post) {
    notFound()
  }

  return (
    <PageLayout>
      <BackLink href="/blog">
        ← 목록으로 돌아가기
      </BackLink>
      
      <BlogArticle post={post} />
    </PageLayout>
  )
} 
export const revalidate = 10 // 🎯 추가