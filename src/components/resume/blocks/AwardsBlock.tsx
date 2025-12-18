// AwardsBlock.tsx
import React from "react";
import { css } from "@/styled-system/css";
import SectionTitle from "@/src/components/resume/SectionTitle";
import BlockWrapper from "@/src/components/resume/BlockWrapper";

interface Award {
  name: string;
  date: string;
  link?: string;
}

export default function AwardsBlock() {
  const title = "Awards & Certifications";
  const awardsList: Award[] = [
    {
      name: "현대무벡스 우수사원상",
      date: "2022.01",
      link: "https://mahogany-wineberry-412.notion.site/2cdea6a1aab8806fbedee858eebf0b4e?source=copy_link",
    },
    { name: "SSAFY 프로젝트 경진대회 우수상", date: "2019.05", link: "https://mahogany-wineberry-412.notion.site/2cdea6a1aab8803a9381c7009153d202?source=copy_link" },
    { name: "정보처리기사", date: "2018.08" },
    { name: "SQLD", date: "2020.10" },
    { name: "TOEIC Speaking Level 6", date: "2020.10" },
  ];

  return (
    <BlockWrapper>
      <SectionTitle text={title} />
      <ul className={listStyle}>
        {awardsList.map((item, index) => (
          <li key={index} className={itemStyle}>
            <div className={itemMainStyle}>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={itemLinkStyle}
                >
                  <span className={itemNameStyle}>{item.name}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ) : (
                <span className={itemNameStyle}>{item.name}</span>
              )}
            </div>
            <span className={itemDateStyle}>{item.date}</span>
          </li>
        ))}
      </ul>
    </BlockWrapper>
  );
}

const listStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const itemStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
});

const itemMainStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const itemNameStyle = css({
  fontSize: "13px",
  fontWeight: "600",
  color: "label.primary",
});

const itemLinkStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  textDecoration: "none",
  color: "label.primary",
  transition: "color 0.2s ease",
  _hover: {
    color: "brand.blue",
    "& svg": {
      color: "brand.blue",
    },
  },
  "@media print": {
    "& svg": {
      display: "none",
    },
  },
});

const itemDateStyle = css({
  fontSize: "13px",
  color: "label.secondary",
  flexShrink: 0,
});
