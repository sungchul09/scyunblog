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
    paragraphs: [
      "물류 자동화 시스템을 개발하며 <strong>실시간 제어와 장애 복구의 중요성</strong>을 체득했습니다. 이 경험을 바탕으로 프론트엔드에서도 '동작하는 코드'를 넘어 <strong>유지보수하기 좋고 예측 가능한 코드</strong>를 작성하려 노력합니다.",
      "내 일의 경계를 짓지 않습니다. 모노레포 전환이 필요할 때 <strong>직접 시뮬레이션 결과를 들고 팀을 설득</strong>했고, 배포 효율을 위해 <strong>인프라 설정까지 주도</strong>했습니다. 팀 전체가 더 나은 환경에서 일할 수 있도록 <strong>구조적인 문제를 해결하는 과정</strong>을 즐깁니다.",
    ],
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
      items: "Jenkins, Docker, AWS (ECR, EKS, S3, CloudFront), Nginx",
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
      title: "문제를 끝까지 추적하여 구조적 해결책을 만듭니다.",
      content:
        '모놀리식 레포 운영의 문제점을 인식했을 때, 단순히 문제를 제기하는 데 그치지 않았습니다. 모노레포, 멀티레포 각각의 장단점을 분석하고, 팀원들을 설득하고, 인프라팀과 협업하여 실제 전환까지 주도했습니다. 디자인 시스템 역시 "누군가 해야 한다"는 상황에서 직접 디자인팀과 커뮤니케이션하고 구현을 시작하여 공용화의 창구를 마련했습니다.',
    },
    {
      title: "팀 전체의 생산성을 고민합니다.",
      content:
        "개인의 코드 품질뿐 아니라, 팀이 효율적으로 협업할 수 있는 환경 자체를 중요하게 생각합니다. Storybook 배포 파이프라인을 구축해 PR 리뷰 시 구현체를 바로 확인할 수 있게 하고, 공통 배포 스크립트를 작성해 신규 앱 추가 비용을 줄이는 등 반복적인 비효율을 제거하는 작업을 즐깁니다.",
    },
    {
      title: "복잡한 문제를 단순하게 풀어냅니다.",
      content:
        "긴급 요청이 병렬로 들어오는 상황에서 페이지 간 결합도가 높아 작은 수정에도 전체 QA가 필요했습니다. 복잡한 아키텍처 패턴 대신 단일 책임 원칙과 관심사 분리라는 기본 원칙에 충실하여 리팩토링을 진행했고, 신규 기능 개발 기간을 2주에서 5일로 단축했습니다.",
    },
    {
      title: "기술적 범위를 스스로 넓힙니다.",
      content:
        "프론트엔드 개발자이지만 필요하다면 인프라 영역까지 직접 학습하고 구현합니다. AWS ECR/EKS 구성, Jenkins 배포 스크립트, Nginx 리버스 프록시 설정 등을 경험하면서 더 넓은 관점에서 문제를 바라볼 수 있게 되었습니다.",
    },
  ],
  projects: [
    {
      companyName: "플리토",
      period: "2022.07 - 현재",
      position: "Frontend Developer",
      list: [
        {
          title: "모노레포 마이그레이션 및 인프라 구축",
          detailUrl: "/portfolio/monorepo-migration",
          items: [
            "6개 서비스를 pnpm Workspace와 Turborepo로 통합, <strong>빌드 시간 50% 단축</strong> (10분 → 5분)",
            '"오버엔지니어링 아니냐"는 팀 내 반대 의견에 멀티레포의 장기적 관점 단점 분석 및 팀 설득',
            "S3, ECR, EKS 기존 인프라 분석 후 서비스별 독립적인 CDN 경로/Docker 이미지/포트 분리 설계",
            "Jenkins 파라미터화 공통 스크립트로 신규 앱 추가 30분 이내 완료, 개발 경험 일관성 확보",
          ],
        },
        {
          title: "디자인 시스템 Storybook 배포 환경 구축",
          detailUrl: "/portfolio/design-system-storybook",
          items: [
            "3년간 방치된 디자인 시스템을 실사용 가능하도록 팀 설득 및 UXD팀 협업 창구 마련",
            "컴포넌트 패키지와 Storybook 앱 분리로 빌드 복잡도 감소 및 의존성 관리 명확화",
            "방치된 레거시 배포 URL 발굴, Jenkins 파이프라인 구축하여 develop 브랜치 자동 배포",
            "PR 리뷰 시 Storybook 링크로 구현체 즉시 확인, 디자이너 직접 QA 가능한 협업 프로세스 정립",
          ],
        },
        {
          title: "Nuxt 3 라이프사이클 기반 캐싱 시스템",
          detailUrl: "/portfolio/nuxt3-caching-system",
          items: [
            "Nuxt 3 코어 코드 분석으로 페이지 전환 시 created가 unmounted보다 먼저 실행되는 특성 발견",
            "useAsyncData + getCachedData + payload 활용하여 외부 라이브러리 없이 페이지 간 캐싱 구현",
            "회원정보 API 70-80%, 사용자 차단 API 75-80%, 랭셋 API 40-60% 호출 감소",
            "일일 약 15만-21만5천 회 API 호출 절약, <strong>월 450만-645만 회 호출 절약 효과</strong>",
          ],
        },
        {
          title: "피드카드 렌더링 타이밍 최적화를 통한 Layout Shift 제거",
          detailUrl: "/portfolio/layout-shift-optimization",
          items: [
            "API 호출 타이밍을 CSR에서 SSR로 변경, ref + 비동기 초기화를 computed로 전환",
            "<strong>CLS 0.474 → 0.001 (99.8% 개선)</strong>, Lighthouse 성능 점수 63 → 83점",
            "사용자 클릭 타이밍에 레이아웃이 변경되어 엉뚱한 곳을 클릭하는 문제 완전 해결",
          ],
        },
        {
          title: "Lottie 파일 최적화",
          items: ["Lottie 파일 CDN 분리로 빌드 시간 단축 및 번들 사이즈 감소"],
        },
        {
          title: "NAC 플랫폼 리팩토링",
          items: [
            "단일 책임 원칙(SRP) 기반 리팩토링으로 UI와 비즈니스 로직 분리",
            "결합도 개선으로 <strong>신규 기능 개발 기간 2주 → 5일로 70% 단축</strong>, QA 기간 90% 감소",
            "레이어 분리 및 액션 추상화로 사이드 이펙트 대폭 축소",
          ],
        },
        {
          title: "리스닝미션 웹 버전 개발",
          items: [
            "모바일 앱 전용 서비스를 웹으로 확장, 3단계 breakpoint 반응형 시스템 수립(scss)",
            "useSeoMeta, useHead로 다국어 환경 동적 메타 태그 생성",
            "세션 스토리지 기반 middleware 라우팅 가드로 순차 진입 정책 구현",
          ],
        },
        {
          title: "프로덕션 에러 모니터링 및 근본 원인 분석",
          detailUrl: "/portfolio/race-condition-analysis",
          items: [
            "Slack 알림으로 간헐적 500 에러 감지, OpenSearch 로그 분석으로 0.5~0.6초 간격 중복 PUT 요청 패턴 발견",
            "debounce 0.3초 + 버튼 비활성화 방어 로직이 있음에도 발생하는 근본 원인 추적",
            "Vue 반응성 시스템의 비동기 특성으로 버튼 비활성화가 지연되고, 첫 요청 완료 후 submitBody가 null이 되어 두 번째 요청이 빈 body로 전송되는 레이스 컨디션 진단",
            "debounce 제거 및 클릭 즉시 버튼 비활성화로 물리적 중복 클릭 원천 차단, 네트워크 환경 무관하게 안정적인 제출 기능 구현",
          ],
        },
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
            "- 녹십자웰빙, 현대엘리베이터 판금/부품공장 3개 프로젝트 완료",
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
