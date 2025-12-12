// AboutBlock.tsx
import React from "react";
import { css } from "@/styled-system/css";
import SectionTitle from "@/src/components/resume/SectionTitle";
import BlockWrapper from "@/src/components/resume/BlockWrapper";

export default function AboutBlock() {
  const title = "About";
  const contentList = [
    "물류 자동화 시스템을 개발하며 <strong>실시간 제어와 장애 복구</strong>의 중요성을 체득했습니다. 이 경험을 바탕으로 프론트엔드에서도 '동작하는 코드'에 그치지 않고, <strong>명확한 지표로 성능을 검증</strong>하며 유지보수하기 좋은 코드를 작성하려 노력합니다.",
    "내 일의 경계를 짓지 않습니다. 모노레포 전환이 필요할 때 직접 시뮬레이션 결과를 들고 팀을 설득했고, 배포 효율을 위해 인프라 설정까지 주도했습니다. <strong>팀 전체가 더 나은 환경에서 일할 수 있도록</strong> 구조적인 문제를 해결하는 과정을 즐깁니다.",
  ];

  return (
    <BlockWrapper>
      <SectionTitle text={title} />
      <div className={contentStyle}>
        {contentList.map((content, index) => (
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
  flexDir: "column",
  gap: "10px",
});

const paragraphStyle = css({
  fontSize: "14px",
  lineHeight: "1.7",
  color: "label.primary",
  "& strong": {
    color: "label.primary",
    fontWeight: "600",
  },
});
