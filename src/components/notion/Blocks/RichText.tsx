// src/components/notion/blocks/RichText.tsx
import { css } from '@/styled-system/css'
import { InlineCodeBlock } from './CodeBlocks'

interface RichTextItem {
  type: string
  text: {
    content: string
    link?: {
      url: string
    }
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href?: string
}

interface RichTextProps {
  richText?: RichTextItem[]
}

export default function RichText({ richText }: RichTextProps) {
  if (!richText || richText.length === 0) return null

  return (
    <>
      {richText.map((item, index) => {
        const {
          text,
          annotations,
          plain_text,
          href
        } = item

        // 코드 스타일
        if (annotations.code) {
          return <InlineCodeBlock key={index} text={plain_text} />
        }

        // 링크 처리
        const linkUrl = text.link?.url || href
        
        // 🎯 색상 처리 개선 - 부모 요소 색상 상속
        const getColor = () => {
          // 기본 색상이거나 색상이 없으면 부모 색상 상속
          if (!annotations.color || annotations.color === 'default') {
            return 'inherit' // 🎯 부모 색상 상속
          }
          return getTextColor(annotations.color)
        }
        
        // 스타일 조합
        const textStyles = css({
          fontWeight: annotations.bold ? 'bold' : 'inherit',
          fontStyle: annotations.italic ? 'italic' : 'normal',
          textDecoration: [
            annotations.strikethrough && 'line-through',
            annotations.underline && 'underline',
            linkUrl && 'none'
          ].filter(Boolean).join(' ') || 'none',
          color: getColor(), // 🎯 개선된 색상 처리
          ...(linkUrl && {
            color: 'blue.600',
            _hover: {
              color: 'blue.800',
              textDecoration: 'underline'
            }
          })
        })

        const content = (
          <span key={index} className={textStyles}>
            {plain_text}
          </span>
        )

        // 링크로 감싸기
        if (linkUrl) {
          return (
            <a
              key={index}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                color: 'blue.600',
                textDecoration: 'none',
                _hover: {
                  color: 'blue.800',
                  textDecoration: 'underline'
                }
              })}
            >
              {content}
            </a>
          )
        }

        return content
      })}
    </>
  )
}

// 색상 매핑 함수
function getTextColor(color: string): string {
  const colorMap: Record<string, string> = {
    default: 'inherit', // 🎯 기본값도 inherit로 변경
    gray: 'gray.600',
    brown: '#8B4513',
    orange: '#D2691E',
    yellow: '#DAA520',
    green: '#228B22',
    blue: '#1E90FF',
    purple: '#8A2BE2',
    pink: '#FF69B4',
    red: '#DC143C'
  }
  
  return colorMap[color] || 'inherit' // 🎯 fallback도 inherit
}