// EducationBlock.tsx
import React from "react";
import SectionTitle from "@/src/components/resume/SectionTitle";
import CareerContent from "@/src/components/resume/CareerContent";
import { css } from "@/styled-system/css";
import BlockWrapper from "@/src/components/resume/BlockWrapper";
import { resumeData } from "@/src/constants/resume";

export default function EducationBlock() {
  const title = "Education";
  const educationList = resumeData.education;

  return (
    <BlockWrapper>
      <SectionTitle text={title} />
      <div className={listStyle}>
        {educationList.map((education, index) => (
          <CareerContent key={index} {...education} />
        ))}
      </div>
    </BlockWrapper>
  );
}

const listStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});
