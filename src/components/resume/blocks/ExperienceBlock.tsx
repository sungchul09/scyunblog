// ExperienceBlock.tsx
import React from "react";
import CareerContent from "@/src/components/resume/CareerContent";
import SectionTitle from "@/src/components/resume/SectionTitle";
import { css } from "@/styled-system/css";
import BlockWrapper from "@/src/components/resume/BlockWrapper";
import { resumeData } from "@/src/constants/resume";

export default function ExperienceBlock() {
  const title = "Experience";
  const experienceList = resumeData.experience;

  return (
    <BlockWrapper>
      <SectionTitle text={title} />
      <div className={listStyle}>
        {experienceList.map((experience, index) => (
          <CareerContent key={index} {...experience} />
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
