// ExperienceBlock.tsx
import React from "react";
import CareerContent from "@/src/components/resume/CareerContent";
import SectionTitle from "@/src/components/resume/SectionTitle";
import { css } from "@/styled-system/css";
import BlockWrapper from "@/src/components/resume/BlockWrapper";
import resumeData from "@/src/constants/resume.json";

export default function ExperienceBlock() {
  const title = "제작 경력";
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
  gap: "15px",
});
