// CoverLetterBlock.tsx
import React from "react";
import SectionTitle from "@/src/components/resume/SectionTitle";
import ParagraphContent from "@/src/components/resume/ParagraphContent";
import { css } from "@/styled-system/css";
import BlockWrapper from "@/src/components/resume/BlockWrapper";
import resumeData from "@/src/constants/resume.json";

export default function CoverLetterBlock() {
  const title = "자기소개서";
  const contentList = resumeData.coverLetter;

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
  gap: "30px",
});
