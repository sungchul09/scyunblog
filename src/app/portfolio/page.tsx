'use client'

import React from 'react'
import { css } from '@/styled-system/css'
import Link from 'next/link'
import { portfolios } from '@/src/constants/portfolios'

export default function PortfolioPage() {
  return (
    <div className={pageContainerStyle}>
      <div className={contentStyle}>
        <h1 className={titleStyle}>Portfolio</h1>
        <p className={subtitleStyle}>
          기술적 문제를 해결한 과정과 결과를 상세히 기록한 포트폴리오입니다.
        </p>

        <div className={portfolioGridStyle}>
          {portfolios.map((portfolio) => (
            <Link
              key={portfolio.id}
              href={`/portfolio/${portfolio.id}`}
              className={cardStyle}
            >
              <div className={cardHeaderStyle}>
                <h2 className={cardTitleStyle}>{portfolio.title}</h2>
                <span className={periodStyle}>{portfolio.period}</span>
              </div>

              <p className={summaryStyle}>{portfolio.summary}</p>

              <div className={tagsContainerStyle}>
                {portfolio.tags.map((tag) => (
                  <span key={tag} className={tagStyle}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={companyStyle}>{portfolio.company}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const pageContainerStyle = css({
  minH: '100vh',
  py: '40px',
  fontFamily: 'Pretendard',
})

const contentStyle = css({
  maxW: '210mm',
  mx: 'auto',
  bgColor: 'white',
  p: '60px',
})

const titleStyle = css({
  fontSize: '24px',
  fontWeight: '700',
  color: 'label.primary',
  mb: '8px',
})

const subtitleStyle = css({
  fontSize: '14px',
  color: 'label.secondary',
  mb: '32px',
})

const portfolioGridStyle = css({
  display: 'flex',
  flexDir: 'column',
  rowGap: '0',
})

const cardStyle = css({
  py: '16px',
  textDecoration: 'none',
  display: 'flex',
  flexDir: 'column',
  rowGap: '8px',
  borderBottom: '1px solid',
  borderBottomColor: 'gray.200',
  '&:hover': {
    bgColor: 'grey.5',
  },
})

const cardHeaderStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  columnGap: '8px',
})

const cardTitleStyle = css({
  fontSize: '14px',
  fontWeight: '600',
  color: 'label.primary',
  lineHeight: '1.4',
})

const periodStyle = css({
  fontSize: '13px',
  color: 'label.tertiary',
  flexShrink: 0,
})

const summaryStyle = css({
  fontSize: '13px',
  color: 'label.secondary',
  lineHeight: '1.6',
})

const tagsContainerStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '6px',
  rowGap: '6px',
})

const tagStyle = css({
  fontSize: '11px',
  color: 'label.tertiary',
  px: '6px',
  py: '2px',
  borderRadius: '3px',
  fontWeight: '400',
  border: '1px solid',
  borderColor: 'gray.200',
})

const companyStyle = css({
  fontSize: '13px',
  color: 'label.tertiary',
  fontWeight: '400',
})
