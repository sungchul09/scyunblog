import React from 'react'
import BlogHeader from '@/src/components/notion/BlockHeader'
import BlogContent from '@/src/components/notion/BlogContent'

export default function BlogArticle({ post }: { post: any }) {
  return (
    <article>
      <BlogHeader post={post} />
      <BlogContent blocks={post.blocks} />
    </article>
  )
}
