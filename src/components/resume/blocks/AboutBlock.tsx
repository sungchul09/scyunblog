// AboutBlock.tsx
import React from "react";
import { css } from "@/styled-system/css";
import SectionTitle from "@/src/components/resume/SectionTitle";
import BlockWrapper from "@/src/components/resume/BlockWrapper";
import { resumeData } from "@/src/constants/resume";

export default function AboutBlock() {
  const { title, paragraphs } = resumeData.about;

  return (
    <BlockWrapper>
      <SectionTitle text={title} />
      <div className={contentStyle}>
        {paragraphs.map((content, index) => (
          <p
            key={index}
            className={paragraphStyle}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}
      </div>
    </BlockWrapper>
  );
}

const contentStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const paragraphStyle = css({
  fontSize: "16px",
  lineHeight: "1.8",
  color: "label.primary",
  "& strong": {
    color: "label.primary",
    fontWeight: "600",
  },
});
