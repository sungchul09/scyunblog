import React from "react";
import SectionTitle from "@/src/components/resume/SectionTitle";
import CareerContent from "@/src/components/resume/CareerContent";

export default function EducationBlock() {
  const title = "Education";
  const educationList = [
    {
      companyName: "한국공학대학교 (한국산업기술대학교)",
      period: "2015.03 - 2019.02",
      position: "소프트웨어학과 학사",
    },
    {
      companyName: "삼성청년 소프트웨어 아카데미 (SSAFY)",
      period: "2018.12 - 2019.08",
      position: "1기 수료",
    },
  ];

  return (
    <section>
      <SectionTitle text={title} />

      {educationList.map((education, index) => (
        <CareerContent key={index} {...education} />
      ))}
    </section>
  );
}
