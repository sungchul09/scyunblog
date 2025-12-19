"use client";

import React, { useRef, useState } from "react";
import { css } from "@/styled-system/css";
import ControlBar from "@/src/components/resume/ControlBar";
import HeaderBlock from "@/src/components/resume/blocks/HeaderBlock";
import AboutBlock from "@/src/components/resume/blocks/AboutBlock";
import ExperienceBlock from "@/src/components/resume/blocks/ExperienceBlock";
import EducationBlock from "@/src/components/resume/blocks/EducationBlock";
import AwardsBlock from "@/src/components/resume/blocks/AwardsBlock";
import ProjectBlock from "@/src/components/resume/blocks/ProjectBlock";
import StrengthsBlock from "@/src/components/resume/blocks/StrengthsBlock";
import SkillsBlock from "@/src/components/resume/blocks/SkillsBlock";

export default function ProfilePage() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(100);

  return (
    <div className={pageContainerStyle}>
      {/* 컨트롤 바 */}
      {/* <ControlBar resumeRef={resumeRef} scale={scale} setScale={setScale} /> */}

      {/* 이력서 컨텐츠 */}
      <div
        ref={resumeRef}
        className={resumeContainerStyle}
        style={{
          zoom: `${scale}%`,
        }}
      >
        <div className={resumeContentStyle}>
          {/* 헤더 */}
          <HeaderBlock />

          {/* 소개 */}
          <AboutBlock />

          {/* 경력 */}
          <ExperienceBlock />

          {/* 학력 */}
          <EducationBlock />

          {/* 자격증 및 수상 */}
          <AwardsBlock />

          {/* 기술 스택 */}
          <SkillsBlock />

          {/* 강점 */}
          <StrengthsBlock />

          {/* 프로젝트 */}
          <ProjectBlock />
        </div>
      </div>
    </div>
  );
}

// 스타일 정의
const pageContainerStyle = css({
  // bgColor: "grey.5",
  minH: "100vh",
  py: "40px",
  "@media print": {
    bgColor: "white",
    py: "0",
    minH: "auto",
  },
  fontFamily: "Pretendard",
});

const resumeContainerStyle = css({
  // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  maxW: "210mm",
  marginTop: "0",
  marginRight: "auto",
  marginBottom: "0",
  marginLeft: "auto",
  bgColor: "white",
  "@media print": {
    maxW: "100%",
    boxShadow: "none",
    margin: "0",
  },
});

const resumeContentStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "70px",
  padding: "20px",
  "@media print": {
    padding: "40px",
  },
});
