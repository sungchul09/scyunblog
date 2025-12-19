"use client";

import React from "react";
import { css } from "@/styled-system/css";
import { useParams, useRouter } from "next/navigation";
import {
  portfolios,
  Portfolio,
  PortfolioSection,
} from "@/src/constants/portfolios";
import Link from "next/link";

export default function PortfolioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const portfolio = portfolios.find((p) => p.id === slug);

  if (!portfolio) {
    return (
      <div className={pageContainerStyle}>
        <div className={contentStyle}>
          <h1>포트폴리오를 찾을 수 없습니다</h1>
          <Link href="/portfolio" className={backLinkStyle}>
            포트폴리오 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={pageContainerStyle}>
      <div className={contentStyle}>
        {/* 뒤로가기 */}
          <Link href="/portfolio" className={backLinkStyle}>
            ← 포트폴리오 목록
          </Link>

        {/* 헤더 */}
        <header className={headerStyle}>
          <h1 className={titleStyle}>{portfolio.title}</h1>
          <div className={metaContainerStyle}>
            <span className={companyStyle}>{portfolio.company}</span>
            <span className={separatorStyle}>·</span>
            <span className={periodStyle}>{portfolio.period}</span>
          </div>
          <div className={tagsContainerStyle}>
            {portfolio.tags.map((tag) => (
              <span key={tag} className={tagStyle}>
                {tag}
              </span>
            ))}
          </div>
          <p className={summaryStyle}>{portfolio.summary}</p>
        </header>

        {/* 본문 */}
        <div className={bodyStyle}>
          {portfolio.sections.map((section, index) => (
            <section key={index} className={sectionStyle}>
              <h2 className={sectionTitleStyle}>{section.title}</h2>

              {section.content && (
                <p className={sectionContentStyle}>{section.content}</p>
              )}

              {section.items && (
                <ul className={listStyle}>
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {section.images && section.images.length > 0 && (
                <div className={imagesContainerStyle}>
                  {section.images.map((imageUrl, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={imageUrl}
                      alt={`${section.title} 이미지 ${imgIdx + 1}`}
                      className={imageStyle}
                    />
                  ))}
                </div>
              )}

              {section.subsections &&
                section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx} className={subsectionStyle}>
                    <h3 className={subsectionTitleStyle}>{subsection.title}</h3>
                    {subsection.images && subsection.images.length > 0 && (
                      <div className={imagesContainerStyle}>
                        {subsection.images.map((imageUrl, imgIdx) => (
                          <img
                            key={imgIdx}
                            src={imageUrl}
                            alt={`${subsection.title} 이미지 ${imgIdx + 1}`}
                            className={imageStyle}
                          />
                        ))}
                      </div>
                    )}
                    {subsection.code && (
                      <pre className={codeBlockStyle}>
                        <code>{subsection.code}</code>
                      </pre>
                    )}
                    {subsection.content && (
                      <p className={subsectionContentStyle}>
                        {subsection.content}
                      </p>
                    )}
                    {subsection.items && (
                      <ul className={listStyle}>
                        {subsection.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </section>
          ))}
        </div>

        {/* 하단 네비게이션 */}
          <div className={navigationStyle}>
            <Link href="/portfolio" className={navButtonStyle}>
              포트폴리오 목록으로
            </Link>
            <Link href="/profile" className={navButtonStyle}>
              이력서 보기
            </Link>
          </div>
      </div>
    </div>
  );
}

const pageContainerStyle = css({
  minH: "100vh",
  py: "40px",
  fontFamily: "Pretendard",
});

const contentStyle = css({
  maxW: "1000px",
  mx: "auto",
  bgColor: "white",
  p: "80px",
});

const backLinkStyle = css({
  display: "inline-flex",
  alignItems: "center",
  fontSize: "13px",
  color: "label.tertiary",
  textDecoration: "none",
  mb: "20px",
  "&:hover": {
    color: "label.primary",
  },
});

const headerStyle = css({
  mb: "48px",
  pb: "28px",
  borderBottom: "1px solid",
  borderBottomColor: "gray.200",
});

const titleStyle = css({
  fontSize: "28px",
  fontWeight: "700",
  color: "label.primary",
  mb: "16px",
  lineHeight: "1.4",
});

const metaContainerStyle = css({
  display: "flex",
  alignItems: "center",
  columnGap: "8px",
  mb: "16px",
});

const companyStyle = css({
  fontSize: "15px",
  color: "label.primary",
  fontWeight: "600",
});

const separatorStyle = css({
  color: "label.tertiary",
});

const periodStyle = css({
  fontSize: "15px",
  color: "label.tertiary",
});

const tagsContainerStyle = css({
  display: "flex",
  flexWrap: "wrap",
  columnGap: "8px",
  rowGap: "8px",
  mb: "20px",
});

const tagStyle = css({
  fontSize: "13px",
  color: "label.tertiary",
  px: "10px",
  py: "4px",
  borderRadius: "4px",
  fontWeight: "400",
  border: "1px solid",
  borderColor: "gray.200",
});

const summaryStyle = css({
  fontSize: "15px",
  color: "label.secondary",
  lineHeight: "1.6",
  fontWeight: "400",
});

const bodyStyle = css({
  display: "flex",
  flexDir: "column",
  rowGap: "48px",
});

const sectionStyle = css({
  display: "flex",
  flexDir: "column",
  rowGap: "12px",
});

const sectionTitleStyle = css({
  fontSize: "16px",
  fontWeight: "600",
  color: "label.primary",
  mb: "8px",
});

const sectionContentStyle = css({
  fontSize: "13px",
  color: "label.primary",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap",
});

const listStyle = css({
  display: "flex",
  flexDir: "column",
  rowGap: "4px",
  listStyleType: "disc",
  listStylePosition: "outside",
  ps: "16px",
  "& li": {
    fontSize: "13px",
    lineHeight: "1.6",
    color: "label.primary",
  },
});

const subsectionStyle = css({
  display: "flex",
  flexDir: "column",
  rowGap: "8px",
  ps: "12px",
  borderLeft: "2px solid",
  borderLeftColor: "gray.200",
  py: "4px",
});

const subsectionTitleStyle = css({
  fontSize: "14px",
  fontWeight: "600",
  color: "label.primary",
});

const subsectionContentStyle = css({
  fontSize: "13px",
  color: "label.secondary",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap",
});

const navigationStyle = css({
  display: "flex",
  justifyContent: "space-between",
  columnGap: "12px",
  mt: "48px",
  pt: "24px",
  borderTop: "1px solid",
  borderTopColor: "gray.200",
});

const navButtonStyle = css({
  flex: 1,
  textAlign: "center",
  py: "8px",
  px: "16px",
  border: "1px solid",
  borderColor: "gray.200",
  fontSize: "13px",
  fontWeight: "400",
  color: "label.secondary",
  textDecoration: "none",
  "&:hover": {
    color: "label.primary",
    borderColor: "label.primary",
  },
});

const imagesContainerStyle = css({
  display: "flex",
  flexDir: "column",
  rowGap: "12px",
  mt: "12px",
});

const imageStyle = css({
  width: "100%",
  height: "auto",
  borderRadius: "4px",
  border: "1px solid",
  borderColor: "gray.200",
});

const codeBlockStyle = css({
  bgColor: "grey.10",
  p: "16px",
  borderRadius: "6px",
  border: "1px solid",
  borderColor: "gray.300",
  overflowX: "auto",
  fontSize: "13px",
  lineHeight: "1.8",
  color: "label.primary",
  fontFamily:
    '"SF Mono", "Monaco", "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  my: "12px",
  whiteSpace: "pre",
  tabSize: 2,
  "& code": {
    fontFamily: "inherit",
    display: "block",
  },
});
