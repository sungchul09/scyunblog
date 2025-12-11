import React from "react";
import ListContent from "@/src/components/resume/ListContent";
import SectionTitle from "@/src/components/resume/SectionTitle";

export default function AwardsBlock() {
  const title = "Awards & Certifications";
  const awardsList = [
    "현대무벡스 우수사원상 — 물류 자동화 시스템 개발 기여 (2021.12)",
    "SSAFY 프로젝트 경진대회 우수상 (2019.05)",
    "정보처리기사 (2018.08)",
    "SQLD (2020.10)",
    "TOEIC Speaking Level 6 (2020.10)",
  ];
  return (
    <section style={{ marginBottom: "40px" }}>
      <SectionTitle text={title} />
      <ListContent list={awardsList} />
    </section>
  );
}
