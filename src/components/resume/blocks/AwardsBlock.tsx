// AwardsBlock.tsx
import React from "react";
import { css } from "@/styled-system/css";
import SectionTitle from "@/src/components/resume/SectionTitle";
import BlockWrapper from "@/src/components/resume/BlockWrapper";

export default function AwardsBlock() {
  const title = "Awards & Certifications";
  const awardsList = [
    {
      name: "현대무벡스 우수사원상",
      desc: "물류 자동화 시스템 개발 기여",
      date: "2022.01",
    },
    { name: "SSAFY 프로젝트 경진대회 우수상", date: "2019.05" },
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
              <span className={itemNameStyle}>{item.name}</span>
              {item.desc && (
                <span className={itemDescStyle}>· {item.desc}</span>
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

const itemDescStyle = css({
  fontSize: "13px",
  color: "label.secondary",
});

const itemDateStyle = css({
  fontSize: "13px",
  color: "label.secondary",
  flexShrink: 0,
});
