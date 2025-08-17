import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = process.env.NOTION_DATABASE_ID!

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

interface PostDetail extends Post {
  blocks: any[]
}

// 게시글 목록 조회 함수
export async function getPosts(): Promise<Post[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      sorts: [
        {
          property: '이름',
          direction: 'descending',
        },
      ],
    })

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.이름.title[0]?.plain_text || 'Untitled',
      createdTime: page.created_time,
      lastEditedTime: page.last_edited_time,
      url: page.url,
      tags: page.properties['다중 선택']?.multi_select || [],
    }))
  } catch (error) {
    console.error('게시글 목록 조회 실패:', error)
    return []
  }
}

// 특정 게시글 조회 함수
export async function getPost(pageId: string): Promise<PostDetail | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId })
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
    })

    return {
      id: (page as any).id,
      title: (page as any).properties.이름.title[0]?.plain_text || 'Untitled',
      createdTime: (page as any).created_time,
      lastEditedTime: (page as any).last_edited_time,
      url: (page as any).url,
      tags: (page as any).properties['다중 선택']?.multi_select || [],
      blocks: blocks.results,
    }
  } catch (error) {
    console.error('게시글 조회 실패:', error)
    return null
  }
}