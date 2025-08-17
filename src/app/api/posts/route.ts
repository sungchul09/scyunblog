import { NextResponse } from 'next/server'
import { getPosts } from '@/src/lib/notion'

export async function GET() {
  try {
    const posts = await getPosts()
    
    return NextResponse.json({ 
      posts,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('API 에러:', error)
    return NextResponse.json(
      { error: '게시글을 불러오는데 실패했습니다.' },
      { status: 500 }
    )
  }
}