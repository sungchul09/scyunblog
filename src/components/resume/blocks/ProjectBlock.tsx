import React from "react";
import ProjectItem from "@/src/components/resume/ProjectItem";
import SectionTitle from "@/src/components/resume/SectionTitle";
import CareerContent from "@/src/components/resume/CareerContent";
import { css } from "@/styled-system/css";

export default function ProjectBlock() {
  const title = "Projects";
  const projectList = [
    {
      companyName: "(주) 플리토",
      period: "2022.07 - 현재",
      teamName: "Data Collection Lab",
      list: [
        {
          title: "모노레포 마이그레이션 및 인프라 구축",
          list: [
            "6개 서비스를 pnpm Workspace와 Turborepo로 통합하여 의존성 복잡도 개선 및 <strong>빌드 시간 50% 단축</strong> (10분 → 5분)",
            "Jenkins 파라미터에 서비스명 입력만으로 배포가 가능한 공통 스크립트를 작성하여 신규 앱 추가 시 배포 설정 소요 시간 최소화",
            "AWS ECR/EKS 및 Nginx 리버스 프록시 구성을 주도하여 인프라팀 의존성 없는 독립적 배포 환경 구축",
          ],
        },
        {
          title: "개발 환경 및 성능 최적화",
          list: [
            "Nuxt 3 HMR 최적화로 개발 환경 로드 시간 1분 → 3초 이내로 개선",
            "Nuxt lifecycle hook을 활용한 메모리 캐시 구현으로 API 중복 호출 60~80% 감소",
          ],
        },
        {
          title: "디자인 시스템 구축 및 문서화",
          list: [
            "3년간 중복 구현되던 UI 요소를 공용화하기 위해 디자인팀과의 협업 및 개발 주도",
            "Button, Input, Tooltip 등 범용 컴포넌트 개발 및 다크모드 Foundation 적용",
            "Jenkins 파이프라인에 Storybook을 연동하여 PR 단계에서의 UI 즉시 검증 프로세스 구축",
          ],
        },
        {
          title: "데이터 수집 플랫폼 뉴아케이드 고도화",
          list: [
            "단일 책임 원칙(SRP) 기반 리팩토링으로 UI와 비즈니스 로직 분리",
            "결합도 개선으로 신규 기능 개발 기간 2주 → 5일로 단축, QA 소요 시간 1일 미만",
            "Page Visibility API와 Beacon API를 활용하여 메인 스레드 부하 없는 데이터 수집 로직 구현",
            "Clarity, Datadog RUM 활용하여 프로덕션 에러 모니터링 및 원인 분석",
          ],
        },
        {
          title: "크라우드 소싱 리스닝 미션 웹 버전 개발",
          list: [
            "채팅형 UI의 말풍선 인터랙션을 구현하고, useSeoMeta를 도입해 다국어 환경에 맞는 메타 태그가 동적으로 적용되도록 개발",
            "앱(App)의 복잡한 순차 진입 로직을 웹으로 옮기기 위해 앱 재배포나 API 수정 공수 없이 Middleware 기반의 라우팅 가드를 구현하여 제어 로직 완성",
            "iOS Safari, Android Chrome, 태블릿 환경 크로스브라우저 대응",
          ],
        },
      ],
    },
    {
      companyName: "(주) 현대무벡스",
      period: "2019.08 - 2022.07",
      teamName: "물류솔루션사팀",
      list: [
        {
          title: "웹 기반 입출고 자동화 시스템 구축",
          list: [
            "기존 Delphi 기반 Windows 전용 프로그램을 React SPA로 전환하여 태블릿/모바일 접근성 확보",
            "Spring Boot 기반 API 서버 구축 및 API 설계",
            "직관적인 UI 개선으로 사용자 서비스 문의량 50% 이상 감소",
            "exe 재배포 방식 탈피로 배포 커뮤니케이션 비용 대폭 감소",
          ],
        },
        {
          title: "물류자동화창고 WCS(Warehouse Control System) 개발",
          list: [
            "삼성바이오로직스, 현대엘리베이터, 녹십자웰빙 3개 프로젝트 수행",
            "각 현장의 목표 가용성 및 물동량을 달성하고, 에러율 5% 미만 유지를 통해 시스템 안정화",
            "Stacker Crane, Shuttle 등 물류 장비를 제어하는 시스템을 개발",
            "멀티스레드 기반 TCP/UDP 소켓 통신을 통해 실시간성을 확보",
            "12개 테이블, 10개 이상의 저장 프로시저 설계 (입출고 트랜잭션, 에러 자동 복구)",
            "WATCHDOG 모듈 개발로 프로세스 감시 및 자동 재시작 구현",
          ],
        },
      ],
    },
  ];

  return (
    <article>
      <SectionTitle text={title} />

      {/* 플리토 프로젝트 */}
      {projectList.map((project, index) => (
        <div key={index} className={projectSectionStyle}>
          <CareerContent {...project} />
          {project.list.map((item, index) => (
            <ProjectItem key={index} {...item} />
          ))}
        </div>
      ))}
    </article>
  );
}

const projectSectionStyle = css({
  mb: "36px",
  pb: "32px",
  borderBlockEndWidth: "1px",
  borderBlockEndStyle: "solid",
  borderBlockEndColor: "label.secondary",
  "&:last-child": {
    borderBlockEndWidth: "0",
    borderBlockEndStyle: "none",
    borderBlockEndColor: "transparent",
    mb: "0",
    pb: "0",
  },
});
