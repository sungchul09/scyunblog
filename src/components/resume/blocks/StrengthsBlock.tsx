import React from "react";
import SectionTitle from "@/src/components/resume/SectionTitle";
import ParagraphContent from "@/src/components/resume/ParagraphContent";

export default function StrengthsBlock() {
  const title = "Strengths";
  const contentList = [
    {
      title: "문제 제기에서 끝나지 않고 직접 해결합니다.",
      content:
        "모놀리식 레포 운영의 문제점을 인식했을 때, 단순히 문제를 제기하는 데 그치지 않았습니다. 모노레포, 멀티레포 각각의 장단점을 분석하고, 팀원들을 설득하고, 인프라팀과 협업하여 실제 전환까지 주도했습니다. 디자인 시스템 역시 '누군가 해야 한다'는 상황에서 직접 디자인팀과 커뮤니케이션하고 구현을 시작하여 공용화의 창구를 마련했습니다.",
    },
    {
      title: "팀 전체의 생산성을 고민합니다.",
      content:
        "개인의 코드 품질뿐 아니라, 팀이 효율적으로 협업할 수 있는 환경 자체를 중요하게 생각합니다. Storybook 배포 파이프라인을 구축해 PR 리뷰 시 구현체를 바로 확인할 수 있게 하고, 공통 배포 스크립트를 작성해 신규 앱 추가 비용을 줄이는 등 반복적인 비효율을 제거하는 작업을 즐깁니다.",
    },
    {
      title: "복잡한 문제를 단순하게 풀어냅니다.",
      content:
        "API 변경과 앱 재배포가 필요했던 라우팅 문제를 middleware 기반 라우팅 가드 설계로 해결하여, API 수정 및 앱 재배포 없이 웹 단독으로 처리할 수 있게 만들었습니다. 리팩토링 시에도 단일 책임 원칙과 관심사 분리라는 기본 원칙에 충실하여, 신규 기능 개발 기간을 2주에서 5일로 단축했습니다.",
    },
    {
      title: "기술적 범위를 스스로 넓힙니다.",
      content:
        "프론트엔드 개발자이지만 필요하다면 인프라 영역까지 직접 학습하고 구현합니다. AWS ECR/EKS 구성, Jenkins 배포 스크립트, Nginx 리버스 프록시 설정 등을 경헵니다. 더 넓은 관점에서 문제를 바라볼 수 있게 되었습니다.",
    },
  ];
  return (
    <section>
      <SectionTitle text={title} />
      {contentList.map((content, index) => (
        <ParagraphContent key={index} {...content} />
      ))}
    </section>
  );
}
