// ExperienceBlock.tsx
import React from "react";
import CareerContent from "@/src/components/resume/CareerContent";
import SectionTitle from "@/src/components/resume/SectionTitle";
import { css } from "@/styled-system/css";
import BlockWrapper from "@/src/components/resume/BlockWrapper";

export default function ExperienceBlock() {
  const title = "Experience";
  const experienceList = [
    {
      companyName: "(주) 플리토",
      period: "2022.07 - 현재 (3년)",
      position: "Frontend Developer",
    },
    {
      companyName: "(주) 현대무벡스",
      period: "2019.08 - 2022.07 (2년 11개월)",
      position: "Software Engineer",
    },
  ];

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
