import React from "react";
import SectionTitle from "@/src/components/resume/SectionTitle";
import ParagraphContent from "@/src/components/resume/ParagraphContent";

export default function AboutBlock() {
  const title = "About";
  const contentList = [
    "물류 자동화 시스템을 개발하며 실시간 제어와 장애 복구의 중요성을 체득했습니다. 이 경험을 바탕으로 프론트엔드에서도 '동작하는 코드'를 넘어 유지보수하기 좋고 예측 가능한 코드를 작성하려 노력합니다.",
    "내 일의 경계를 짓지 않습니다. 모노레포 전환이 필요할 때 직접 시뮬레이션 결과를 들고 팀을 설득했고, 배포 효율을 위해 인프라 설정까지 주도했습니다. 팀 전체가 더 나은 환경에서 일할 수 있도록 구조적인 문제를 해결하는 과정을 즐깁니다.",
  ];

  return (
    <section>
      <SectionTitle text={title} />
      {contentList.map((content, index) => (
        <ParagraphContent key={index} content={content} />
      ))}
    </section>
  );
}
