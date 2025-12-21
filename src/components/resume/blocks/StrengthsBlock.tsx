// StrengthsBlock.tsx
import React from "react";
import SectionTitle from "@/src/components/resume/SectionTitle";
import ParagraphContent from "@/src/components/resume/ParagraphContent";
import { css } from "@/styled-system/css";
import BlockWrapper from "@/src/components/resume/BlockWrapper";
import resumeData from "@/src/constants/resume.json";

export default function StrengthsBlock() {
  const title = "핵심 역량";
  const contentList = resumeData.strengths;

  return (
    <BlockWrapper>
      <SectionTitle text={title} />
      <div className={listStyle}>
        {contentList.map((content, index) => (
          <ParagraphContent key={index} {...content} />
        ))}
      </div>
    </BlockWrapper>
  );
}

const listStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
