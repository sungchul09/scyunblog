'use client'

import { useState, useEffect, useMemo } from 'react'
import { css } from '@/styled-system/css'
import PageLayout from '@/src/components/notion/PageLayout'
import PageTitle from '@/src/components/notion/PageTitle'
import BlogPostCard from '@/src/components/notion/BlogPostCard'
import SearchFilter from '@/src/components/notion/SearchFilter'
import { useInfiniteScroll } from '@/src/hooks/useInfiniteScroll'
import LoadingSpinner from '@/src/components/common/LoadingSpinner'
import EmptyState from '@/src/components/common/EmptyState'
import SearchResultInfo from '@/src/components/notion/SearchResultInfo'

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

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  
  const POSTS_PER_PAGE = 10

  // 초기 데이터 로드
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/posts')
        const data = await response.json()
        setAllPosts(data.posts || [])
      } catch (error) {
        console.error('게시글 로드 실패:', error)
        setAllPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // 필터링된 게시글
  const filteredPosts = useMemo(() => {
    let filtered = allPosts

    // 제목 검색
    if (searchQuery.trim()) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // 태그 필터링
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        selectedTags.every(selectedTag =>
          post.tags.some(tag => tag.name === selectedTag)
        )
      )
    }

    return filtered
  }, [allPosts, searchQuery, selectedTags])

  // 페이지네이션된 게시글
  const paginatedPosts = useMemo(() => {
    return filteredPosts.slice(0, currentPage * POSTS_PER_PAGE)
  }, [filteredPosts, currentPage])

  // 무한 스크롤 설정
  const hasMore = paginatedPosts.length < filteredPosts.length
  const { observerRef } = useInfiniteScroll({
    hasMore,
    isLoading: false,
    onLoadMore: () => {
      if (hasMore) {
        setCurrentPage(prev => prev + 1)
      }
    }
  })

  // 검색/필터 변경 시 페이지 리셋
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedTags])

  // 표시할 게시글 업데이트
  useEffect(() => {
    setDisplayedPosts(paginatedPosts)
  }, [paginatedPosts])

  // 모든 태그 추출
  const availableTags = useMemo(() => {
    const tagMap = new Map()
    allPosts.forEach(post => {
      post.tags.forEach(tag => {
        if (!tagMap.has(tag.name)) {
          tagMap.set(tag.name, tag)
        }
      })
    })
    return Array.from(tagMap.values())
  }, [allPosts])

  if (isLoading) {
    return (
      <PageLayout>
        <div className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh'
        })}>
          <LoadingSpinner />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className={css({
          display: 'flex',
          justifyContent: 'start',
          padding: '2rem',
          marginBottom: '2rem'
        })}>
      <PageTitle>블로그 포스트</PageTitle>
      </div>
      
      {/* 검색 및 필터 */}
      <SearchFilter
        onSearchChange={setSearchQuery}
        onTagFilter={setSelectedTags}
        availableTags={availableTags}
        selectedTags={selectedTags}
        searchQuery={searchQuery}
      />

      {/* 검색 결과 정보 */}
      <SearchResultInfo 
        totalPosts={allPosts.length}
        filteredPosts={filteredPosts.length}
        searchQuery={searchQuery}
        selectedTags={selectedTags}
      />

      {/* 게시글 목록 */}
      <div className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      })}>
        {displayedPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      {/* 빈 상태 */}
      {filteredPosts.length === 0 && !isLoading && (
        <EmptyState 
          searchQuery={searchQuery} 
          selectedTags={selectedTags}
        />
      )}

      {/* 무한 스크롤 트리거 */}
      {hasMore && (
        <div ref={observerRef} className={css({
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
          marginTop: '2rem'
        })}>
          <LoadingSpinner />
        </div>
      )}

      {/* 로드 완료 메시지 */}
      {!hasMore && displayedPosts.length > 0 && (
        <div className={css({
          textAlign: 'center',
          padding: '2rem',
          color: 'gray.500',
          fontSize: '0.875rem'
        })}>
          모든 게시글을 불러왔습니다 ✨
        </div>
      )}
    </PageLayout>
  )
} 