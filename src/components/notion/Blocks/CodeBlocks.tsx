// src/components/notion/blocks/CodeBlocks.tsx
import { css } from '@/styled-system/css'
import { Block } from '../BlockRenderer'
import RichText from './RichText'

export function CodeBlock({ block }: { block: Block }) {
  const code = block.code
  const language = code?.language || 'text'
  const caption = code?.caption

  return (
    <div className={css({
      margin: '1.5rem 0'
    })}>
      <div className={css({
        backgroundColor: '#1f2937',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '1px solid #374151'
      })}>
        {/* 코드 블록 헤더 */}
        <div className={css({
          backgroundColor: '#374151',
          padding: '0.75rem 1rem',
          fontSize: '0.875rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        })}>
          <span 
            className={css({
              fontWeight: '600',
              fontFamily: 'monospace'
            })}
            style={{ color: '#f9fafb' }}
          >
            {language.toUpperCase()}
          </span>
          <div className={css({
            display: 'flex',
            gap: '0.25rem'
          })}>
            <div className={css({
              width: '0.75rem',
              height: '0.75rem',
              borderRadius: '50%',
              backgroundColor: '#ef4444'
            })} />
            <div className={css({
              width: '0.75rem',
              height: '0.75rem',
              borderRadius: '50%',
              backgroundColor: '#f59e0b'
            })} />
            <div className={css({
              width: '0.75rem',
              height: '0.75rem',
              borderRadius: '50%',
              backgroundColor: '#10b981'
            })} />
          </div>
        </div>
        
        {/* 🎯 코드 내용 - RichText가 색상을 상속받도록 설정 */}
        <pre 
          className={css({
            padding: '1.5rem',
            margin: '0',
            overflow: 'auto',
            fontSize: '0.875rem',
            fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace',
            lineHeight: '1.6',
            backgroundColor: '#1f2937',
            color: '#f1f5f9' // 🎯 RichText가 상속받을 색상
          })}
        >
          <code 
            className={css({
              fontFamily: 'inherit',
              fontSize: 'inherit',
              color: 'inherit' // 🎯 부모 색상 상속
            })}
          >
            <RichText richText={code?.rich_text} />
          </code>
        </pre>
      </div>
      
      {/* 캡션 */}
      {caption && caption.length > 0 && (
        <div className={css({
          marginTop: '0.5rem',
          fontSize: '0.875rem',
          color: 'gray.600',
          textAlign: 'center',
          fontStyle: 'italic'
        })}>
          <RichText richText={caption} />
        </div>
      )}
    </div>
  )
}

export function InlineCodeBlock({ text }: { text: string }) {
  return (
    <code 
      className={css({
        backgroundColor: '#f1f5f9',
        padding: '0.125rem 0.5rem',
        borderRadius: '0.375rem',
        fontSize: '0.875rem',
        fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
        fontWeight: '500',
        border: '1px solid #e2e8f0',
        color: '#dc2626' // 🎯 인라인 코드는 빨간색 유지
      })}
    >
      {text}
    </code>
  )
}