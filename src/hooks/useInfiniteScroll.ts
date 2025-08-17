'use client'

import { useEffect, useRef, useCallback } from 'react'

interface UseInfiniteScrollProps {
  hasMore: boolean
  isLoading: boolean
  onLoadMore: () => void
  threshold?: number
}

export function useInfiniteScroll({
  hasMore,
  isLoading,
  onLoadMore,
  threshold = 100
}: UseInfiniteScrollProps) {
  const observerRef = useRef<HTMLDivElement>(null)

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting && hasMore && !isLoading) {
      onLoadMore()
    }
  }, [hasMore, isLoading, onLoadMore])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: `${threshold}px`,
      threshold: 0.1
    })

    const currentRef = observerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [handleIntersect, threshold])

  return { observerRef }
}