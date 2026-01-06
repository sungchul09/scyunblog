// Resume data interfaces
export interface About {
  title: string;
  paragraphs: string[];
}

export interface Experience {
  companyName: string;
  period: string;
  position: string;
}

export interface Education {
  companyName: string;
  period: string;
  position: string;
}

export interface Skill {
  category: string;
  items: string;
}

export interface Strength {
  title: string;
  content: string;
}

export interface ProjectItem {
  title: string;
  detailUrl?: string;
  items: string[];
}

export interface Project {
  companyName: string;
  period: string;
  position: string;
  list: ProjectItem[];
}

export interface ResumeData {
  about: About;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  strengths: Strength[];
  projects: Project[];
}

// Resume data
export const resumeData: ResumeData = {
  about: {
    title: "about",
    paragraphs: ["물류 자동화 시스템 개발 경험을 바탕으로, 프론트엔드에서도 운영 안정성을 중요하게 봅니다. UI뿐 아니라 배포 구조와 캐시, 로그까지 함께 보며 문제를 해결해왔습니다."],
  },
  experience: [
    {
      companyName: "플리토",
      period: "2022.07 - 현재 (2년 6개월)",
      position: "Frontend Developer",
    },
    {
      companyName: "현대무벡스",
      period: "2019.08 - 2022.07 (2년 11개월)",
      position: "Software Engineer",
    },
  ],
  education: [
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
  ],
  skills: [
    {
      category: "Core",
      items: "Vue 3, Nuxt 3, TypeScript, JavaScript, React",
    },
    {
      category: "Infra & Build",
      items: "pnpm, Turborepo, Vite, Webpack",
    },
    {
      category: "DevOps",
      items: "Jenkins, Docker, AWS, Nginx",
    },
    {
      category: "Monitoring",
      items: "Datadog RUM, OpenSearch, Lighthouse",
    },
    {
      category: "Collaboration",
      items: "Storybook, Git, Figma, Jira, Slack",
    },
  ],
  strengths: [
    {
      title: "문제가 재현되지 않으면, 로그부터 봅니다",
      content:
      '국내에서 재현되지 않는 에러를 Datadog RUM과 OpenSearch 로그로 추적해 요청 타이밍 패턴과 CDN 캐시 불일치를 원인으로 특정하고 해결했습니다.',
    },
    {
      title: "반복되는 불편을 구조로 없애려고 시도합니다",
      content:
      '모노레포 전환, 공통 배포 스크립트, Storybook 배포 파이프라인 등 "누군가 계속 귀찮아하던 일"을 시스템으로 정리하는 작업을 주도해왔습니다.',
    },
    {
      title: "Nuxt 3 페이지 라이프사이클을 분석해 공통 API 캐싱을 구현했습니다",  
      content:
      'SSR 환경에서 페이지 전환 시점을 활용해 캐시를 재사용하도록 설계했고, 월 약 450만~600만 회의 API 호출을 줄였습니다.',
    }
  ],
  projects: [
    {
      companyName: "플리토",
      period: "2022.07 - 현재",
      position: "Frontend Developer",
      list: [
        {
          title: "프론트엔드 모노레포 전환 및 배포 체계 구축",
          detailUrl: "https://mahogany-wineberry-412.notion.site/2daea6a1aab8807e9009d021b537265e",
          items: [
            "6개 서비스 모놀리식 레포를 pnpm Workspace + Turborepo 기반 모노레포로 전환",
            "멀티레포/모노레포 비교 자료로 팀 설득, 인프라팀과 협업해 배포 구조 재설계",
            "Jenkins 파라미터화 스크립트로 서비스별 독립 배포 구현",
            "<strong> -> 빌드 시간 50% 단축, 신규 앱 추가 30분 이내</strong>",
          ],
        },
        {
          title: "디자인 시스템 실사용 구조 재정비",
          detailUrl: "https://mahogany-wineberry-412.notion.site/2daea6a1aab88002be79c3c55d9b7a4c",
          items: [
            "방치된 디자인 시스템을 Storybook 중심 구조로 재설계",
            "UXD팀과 협업 프로세스 수립, PR 단계 UI QA 환경 구축",
            "공용 컴포넌트 및 Foundation 정비",
            "<strong> -> UI 중복 구현 감소, 커뮤니케이션 비용 절감</strong>",
          ],
        },
        {
          title: "Nuxt 3 라이프사이클 기반 API 캐싱 최적화",
          detailUrl: "https://mahogany-wineberry-412.notion.site/Nuxt-2daea6a1aab88030811ff115ee838eba",
          items: [
            "페이지 전환 라이프사이클 분석을 통한 공통 API 캐싱 구현",
            "외부 라이브러리 없이 SSR 환경 캐시 문제 해결",
            "<strong> -> 월 450만~645만 회 API 호출 절약</strong>",
          ],
        },
        {
          title: "운영 안정성 및 성능 개선",
          detailUrl: "https://mahogany-wineberry-412.notion.site/2daea6a1aab88087a8abef6c8116b0f3",
          items: [
            "SSR 렌더링 타이밍 조정으로 Layout Shift 제거 (CLS 0.474 → 0.001)",
            "로그 기반 분석으로 간헐적 500 에러 및 CDN 캐시 이슈 해결",
          ],
        }
      ],
    },
    {
      companyName: "현대무벡스",
      period: "2019.08 - 2022.07",
      position: "Software Engineer",
      list: [
        {
          title: "물류 자동화 창고 제어 시스템 개발",
          items: [
            "녹십자웰빙, 현대엘리베이터 판금/부품공장 3개 프로젝트 완료",
            "공유메모리 기반 실시간 제어 아키텍처 설계 (SYSC, CCOM, AREA 모듈 분리)",
            "멀티스레드 기반 TCP/UDP 소켓 통신으로 Stacker Crane, RTV, Shuttle 등 장비 실시간 제어",
            "12개 테이블, 10개 이상 저장 프로시저 설계 (입출고 트랜잭션, 공출고/이중입고 자동 복구)",
            "프로세스 감시 및 자동 재시작 구현으로 월 중단 시간 8시간 → 10분 단축, 설비 가동률 유지",
          ],
        },
        {
          title: "웹 기반 WCS UI 개발",
          items: [
            "Delphi exe 기반 → React SPA 전환으로 태블릿/모바일 접근성 확보",
            "Spring Boot 기반 RESTful API 서버 구축 및 JPA/Hibernate 연동",
            "직관적 UI 개선으로 <strong>사용자 교육 시간 50% 감소</strong>, exe 재배포 방식 탈피",
          ],
        },
      ],
    },
  ],
};
