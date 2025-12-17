export interface Portfolio {
  id: string;
  title: string;
  period: string;
  company: string;
  tags: string[];
  summary: string;
  sections: PortfolioSection[];
}

export interface PortfolioSection {
  title: string;
  content?: string;
  items?: string[];
  images?: string[];
  subsections?: {
    title: string;
    content?: string;
    code?: string;
    items?: string[];
    images?: string[];
  }[];
}

export const portfolios: Portfolio[] = [
  {
    id: "monorepo-migration",
    title: "모노레포 마이그레이션 및 인프라 구축",
    period: "2024.01 - 2024.02",
    company: "Flitto",
    tags: ["pnpm", "Turborepo", "AWS", "Jenkins", "Docker", "Kubernetes"],
    summary:
      "6개 서비스를 pnpm Workspace와 Turborepo로 통합하여 빌드 시간 50% 단축. 팀 내 반대 의견을 극복하고 서비스별 독립 배포 환경 구축.",
    sections: [
      {
        title: "배경/문맥",
        content:
          "플리토 프론트엔드는 6개 서비스가 하나의 모놀리식 레포에서 운영되고 있었습니다. 처음에는 적절한 규모로 팀이 유지되고 있어서 한 팀이 원활하게 의사소통하며 서비스의 모든 기능을 이해할 수 있는 수준이었습니다.\n\n하지만 회사는 연구소 설립으로 신규 서비스 론칭 계획이 여러 개 잡혀있었고, 점차 이것은 우리가 커버할 수 있는 범위를 넘어가기 시작했습니다.",
      },
      {
        title: "문제 상황",
        items: [
          "코드를 수정한 후 엉뚱한 곳에서 버그가 발생",
          "간단한 수정 사항을 적용하기 위해 통합, 테스트, 빌드 및 배포 시간이 점점 길어짐",
          "서비스가 늘어날수록 작업을 위한 커뮤니케이션이 점점 늘어나고, 머지 시 컨플릭트가 자주 발생",
          "새로운 기능을 위해 기존 코드를 활용하기 무섭고, 서비스를 추가하는 절차도 무서워짐",
        ],
      },
      {
        title: "팀 설득 과정",
        subsections: [
          {
            title: '"오버엔지니어링 아니냐"',
            content:
              "모노레포 분석과 테스트 내용을 팀에 공유했더니 다음과 같은 우려가 나왔습니다.",
            items: [
              "CI 구성이 복잡할 수 있다",
              "git 저장소 자체가 빠르게 무거워질 수 있다",
              "모든 코드가 밀집되어 있어 사소한 문제가 크게 확대될 가능성",
            ],
          },
          {
            title: "멀티레포의 장기적 관점에서의 단점",
            items: [
              "라이브러리 수정의 번거로움: App1에서 버그 발견 → Library 레포 오픈 → 수정 → 퍼블리시 → App1에서 버전 업데이트 → 사용하는 다른앱에서도 버전 업데이트",
              "히스토리 단절: 각 레포가 독립적으로 히스토리를 관리하기 때문에 전체 프로젝트 흐름 파악이 어려움",
              "프로젝트 생성 비용: 멀티레포에서는 새 프로젝트마다 레포 생성, 설정, CI 구성이 필요",
              "컨텍스트 스위칭: 멀티레포는 프로젝트마다 설정이 달라 6개월 전 코드로 돌아갈 때 맥락이 끊김",
            ],
          },
        ],
      },
      {
        title: "기술적 의사결정",

        subsections: [
          {
            title: "기존 모놀리식 배포 구조 분석",
            images: ["/images/portfolio/monorepo1.png"],
            content:
              "먼저 기존 배포 과정을 분석했습니다. 모놀리식 레포의 각 서비스는 SSR을 지원하며 배포 시 다음 과정을 거칩니다.",
            items: [
              "Nuxt 빌드를 통해 생성된 정적 파일을 S3에 업로드",
              "Docker 이미지로 만들어 ECR에 푸시",
              "Kustomize를 통해 환경별 설정을 오버레이하고 EKS 클러스터에 Pod 생성",
            ],
          },
          {
            title: "모노레포 인프라 설계",
            images: ["/images/portfolio/monorepo2.png"],
            content:
              "모노레포에서는 각 서비스가 독립적인 리소스를 갖도록 설계했습니다.",
            items: [
              "S3 경로 구조: 서비스명을 변수로 처리하여 각 서비스가 독립적인 CDN 경로를 갖도록 변경",
              "Docker 이미지 분리: front-flitto-${SERVICE_NAME}",
              "포트 할당 분리: 각 서비스별 독립적인 포트 범위 할당",
            ],
          },
          {
            title: "기술 선택 이유",
            items: [
              "pnpm: npm 대비 디스크 효율과 설치 속도 우수, 백엔드팀의 향후 마이그레이션 참고 사례로 활용 가능",
              "Turborepo: 로컬 캐싱으로 빌드 속도 개선, 변경 감지로 영향받는 패키지만 재빌드, Lerna나 Nx 대비 학습 곡선이 낮음",
            ],
          },
        ],
      },
      {
        title: "구현 내용",
        items: [
          "파일 분리 진행 시 경로 외에는 변경사항이 없도록 하여 스프린트 진행 중인 서비스들과의 머지 충돌 최소화",
          "각 앱마다 빌드 스크립트가 제대로 실행되는지 dev 환경에서 철저히 테스트",
          "인프라팀과 협의하여 약 5초의 서비스 중단 시간을 허용하는 배포 전략 수립",
          "이용자가 적은 밤 10~12시경에 배포 진행",
        ],
      },
      {
        title: "달성 성과",
        items: [
          "빌드 시간 50% 단축 (10분 → 5분)",
          "신규 앱 추가 30분 이내 완료",
          "서비스별 독립 배포 환경 구축",
          "디자인 시스템 수정 시 HMR로 즉시 확인 가능",
        ],
      },
      {
        title: "임팩트",
        content:
          "디자인 시스템을 수정하고 각 서비스에서 즉시 확인할 수 있게 되면서 컨텍스트 스위칭 비용이 크게 줄었습니다. packages 하위에 디자인 시스템을 두어 수정 시에도 각 서비스에서 HMR로 바로 반영되는 경험은 생산성 향상에 직접적인 도움이 되었습니다.\n\n프론트엔드 개발자가 알아야 할 범위에 대해 다시 생각하게 되었습니다. S3, ECR, Kubernetes 같은 인프라 영역이 처음에는 낯설었지만, 결국 내가 만든 코드가 어떻게 배포되고 서빙되는지 이해하는 것은 더 나은 개발자가 되는 데 필수적이라는 걸 깨달았습니다.",
      },
      {
        title: "한계점 및 추후 고도화 방향",
        items: [
          "CSR 서비스가 들어올 경우 배포 스크립트 공통화 방안 필요 (현재는 모든 서비스가 SSR 기반)",
          "pnpm-lock.yaml 파일 충돌이 빈번하게 발생하여 효율적인 관리 방안 필요",
        ],
      },
    ],
  },
  {
    id: "design-system-storybook",
    title: "디자인 시스템 Storybook 배포 환경 구축",
    period: "2025.09 - ",
    company: "Flitto",
    tags: ["Storybook", "Vue 3", "TypeScript", "Jenkins", "pnpm"],
    summary:
      "3년간 방치된 디자인 시스템을 실사용 가능하도록 Storybook 배포 환경 구축. UXD-프론트 간 협업 창구 마련.",
    sections: [
      {
        title: "배경/문맥",
        content:
          '디자인 시스템이 3년간 존재했지만 아무도 사용하지 않았습니다. 구현체를 확인하려면 코드를 직접 봐야 했고, 디자이너가 QA할 수 있는 창구가 없었습니다. 결국 "디자인 시스템 쓰는 것보다 직접 만드는 게 빠르다"는 인식이 팀에 퍼졌습니다.',
      },
      {
        title: "문제 상황",
        items: [
          "디자인 시스템이 존재하지만 3년간 아무도 사용하지 않음",
          "구현체를 확인할 방법이 없음 (코드를 직접 봐야 함)",
          "디자이너가 QA할 수 있는 창구 부재",
          "패키지 내 컴포넌트와 Storybook이 혼재되어 의존성/빌드 복잡성 문제",
        ],
      },
      {
        title: "팀 설득 과정",
        content:
          '프론트팀에 디자인 시스템 재구축 필요성을 제기했을 때 "또 시작이냐"는 반응이 많았습니다. 3년간 방치됐던 전례가 있었기 때문입니다.\n\n다음 두 가지를 강조해서 설득했습니다: Storybook 배포로 디자이너가 직접 QA 가능, PR 리뷰 시 구현체 바로 확인 가능.\n\nUXD팀과의 협업 필요성도 제기했습니다. 현재 컴포넌트가 어떻게 쓰이고 있고, 어떤 부분이 디자인 시안과 다른지 UXD팀과 커뮤니케이션하면서 디자인 시스템 버전을 함께 업데이트해야 한다고 주장했습니다.',
      },
      {
        title: "기술적 의사결정",
        subsections: [
          {
            title: "Apps/Packages 구조 분리",
            content:
              "초기에는 packages/flitto-design-system 안에 컴포넌트와 Storybook 설정이 함께 있었습니다. packages/flitto-design-system (순수 컴포넌트)과 apps/design-system-storybook (문서화 앱)으로 분리했습니다.",
            items: [
              "런타임 Vue 컴포넌트와 문서화용 Storybook 의존성이 같은 package.json에 공존하는 문제 해결",
              "라이브러리 빌드와 Storybook 빌드가 서로 영향을 주는 문제 해결",
            ],
          },
          {
            title: "Storybook 배포 환경 구축",
            content:
              "로컬에서만 실행 가능한 Storybook은 아무도 안 봤습니다. URL만 공유하면 누구나 볼 수 있는 환경이 필요했습니다. 방치되어 있던 레거시 디자인 시스템 전용 문서 URL을 발견하고, wiki 문서를 뒤져 해당 포트번호를 알아낸 뒤 Jenkins 배포 파이프라인을 구축했습니다.",
          },
        ],
      },
      {
        title: "달성 성과",
        items: [
          "패키지 빌드 시간 단축 (Storybook 관련 패키지 분리)",
          "디자이너가 Storybook으로 직접 QA 가능한 협업 프로세스 정립",
          "PR 리뷰 시 구현체 즉시 확인 가능",
        ],
      },
      {
        title: "임팩트",
        content:
          '3년간 방치되던 디자인 시스템을 실제로 사용할 수 있는 환경을 만들었습니다. Storybook 하나로 UXD-프론트, 프론트-프론트 간 커뮤니케이션이 가능해졌습니다. 디자이너는 디자인 시스템 스펙대로 구현 안 된 부분을 쉽게 지적할 수 있게 됐고, 개발자는 디자인 시안과 다른 부분을 역으로 지적할 수 있게 됐습니다. "또 Button 만들어야 하나?"에서 "디자인 시스템에 있으니 가져다 쓰자"로 인식이 바뀌는 계기가 되었습니다.',
      },
      {
        title: "한계점 및 추후 고도화 방향",
        items: [
          "현재 storybook은 dev 환경만 배포되어 있고, stg/prod 환경 분리는 미진행",
          "초기단계로 스펙을 확정하고 추가해가야할 컴포넌트가 다수 존재",
        ],
      },
    ],
  },
  {
    id: "nuxt3-caching-system",
    title: "Nuxt 3 라이프사이클 기반 캐싱 시스템",
    period: "2024.11.01 - 2024.11.15",
    company: "Flitto",
    tags: ["Nuxt 3", "Vue 3", "useAsyncData", "OpenSearch"],
    summary:
      "Nuxt 3 코어 코드 분석으로 페이지 전환 시 unmounted보다 created가 먼저 실행되는 특성 발견. 외부 라이브러리 없이 페이지 간 캐싱 구현하여 월 450만~645만 회 API 호출 절약.",
    sections: [
      {
        title: "배경/문맥",
        content:
          "번역 플랫폼은 다양한 언어의 사용자들이 접근하므로 다국어 처리용 언어 정보 API, 회원정보 API, 사용자 차단 API 등이 빈번하게 호출됐습니다. 서버 측에서는 메모리 확장으로 대응했지만, 프론트엔드 측에서도 트래픽 부담을 줄일 수 있는 방법을 고민하게 되었습니다.",
      },
      {
        title: "문제 상황",
        items: [
          "변경 가능성 낮은 데이터를 매번 새로 요청: 회원정보, 언어정보, 차단 유저 정보 같은 세션 내내 변하지 않는 데이터를 페이지 이동 때마다 반복 호출",
          "useAsyncData의 한계: SSR-CSR 중복 호출 방지만 가능하고 페이지 간 캐싱은 불가능",
          "Tanstack Query의 제약: 2023년 당시 Nuxt 3 SSR 지원이 불완전",
        ],
      },
      {
        title: "기술적 의사결정",
        subsections: [
          {
            title: "useAsyncData로도 페이지 간 캐싱이 가능하다",
            content:
              "useAsyncData의 getCachedData 옵션을 분석하던 중, 이것을 잘만 이용하면 페이지 간 캐시가 가능할 것이라는 가설을 세웠습니다. 바로 Nuxt 3의 페이지 라이프사이클을 이용하는 것입니다.",
          },
          {
            title: "Nuxt 3 페이지 라이프사이클 분석",
            content:
              "페이지 전환 시: global middleware → 다음 페이지 created → 이전 페이지 unmounted → 다음 페이지 mounted\n\n핵심은 다음 페이지의 created가 이전 페이지의 unmounted보다 먼저 실행된다는 점입니다.",
          },
          {
            title: "getCachedData의 동작 원리",
            items: [
              "Global middleware에서 getCachedData 설정: 다음 페이지 진입 시 nuxtApp.payload[key]를 리턴하도록 설정",
              "Payload에서 캐시 데이터 확인: 이전 페이지가 아직 unmounted 되지 않았기 때문에 이전 페이지에서 호출했던 데이터가 payload에 남아있음",
              "API 호출 스킵: getCachedData가 값을 리턴했으므로 useAsyncData는 API 호출을 하지 않음",
            ],
          },
        ],
      },
      {
        title: "구현 내용",
        subsections: [
          {
            title: "getCachedData를 활용한 페이지 간 캐싱",
            code: `// middleware/cache.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp()

  // 캐시 키 설정
  const cacheKey = 'user-info'

  // useAsyncData에서 getCachedData로 캐시 확인
  const { data } = await useAsyncData(
    cacheKey,
    () => $fetch('/api/user'),
    {
      getCachedData: (key) => {
        // payload에서 이전 페이지의 데이터 확인
        return nuxtApp.payload.data[key]
      }
    }
  )
})`,
            items: [
              "Global middleware에서 useAsyncData 호출",
              "getCachedData에서 nuxtApp.payload 확인",
              "이전 페이지에서 호출한 데이터가 있으면 재사용",
              "없으면 새로 API 호출",
            ],
          },
        ],
      },
      {
        title: "OpenSearch 모니터링",
        images: [
          "/images/portfolio/caching1.png",
          "/images/portfolio/caching2.png",
        ],
        content:
          '캐시 처리 후 실제 효과를 측정하기 위해 OpenSearch로 API 호출 횟수를 모니터링했습니다. 단순히 count hits만 보면 사용자 수 감소인지 캐시 효과인지 구분이 어려워, 비교 대상으로 캐시를 적용하지 않은 "프로젝트 목록 API"를 선정했습니다.',
      },
      {
        title: "달성 성과",
        subsections: [
          {
            title: "회원정보 API",
            images: ["/images/portfolio/caching3.png"],
            items: [
              "적용 전: 약 60,000-200,000 hits/day",
              "적용 후: 약 10,000-40,000 hits/day",
              "감소율: 약 70-80%",
            ],
          },
          {
            title: "사용자 차단 API",
            images: ["/images/portfolio/caching4.png"],
            items: [
              "적용 전: 약 60,000-70,000 hits/day",
              "적용 후: 약 10,000-20,000 hits/day",
              "감소율: 약 75-80%",
            ],
          },
          {
            title: "랭셋 API",
            images: ["/images/portfolio/caching5.png"],
            items: [
              "적용 전: 약 20,000-25,000 hits/day",
              "적용 후: 약 5,000-15,000 hits/day",
              "감소율: 약 40-60%",
            ],
          },
        ],
      },
      {
        title: "임팩트",
        content:
          'Nuxt 3 코어 코드까지 분석하며 프레임워크의 동작 원리를 깊이 이해하게 됐고, 이를 바탕으로 외부 라이브러리 없이 프레임워크 자체 기능만으로 문제를 해결할 수 있다는 것을 증명했습니다. 이 경험은 팀 내에서 "무조건 라이브러리 도입"이 아닌 "프레임워크 자체 솔루션 우선 검토"라는 문화를 만드는 데 기여했습니다.',
      },
      {
        title: "한계점 및 추후 고도화 방향",
        items: [
          "새로고침 시 캐시가 초기화되는 한계 (이 부분은 Service Worker로 보완 가능)",
          "랭셋 API의 chunk 분할 방식 개선 필요",
          "TTL 기반 캐시 무효화 전략 수립",
          "실시간 데이터 동기화가 필요한 경우 예외 처리 방안 마련",
        ],
      },
    ],
  },
  {
    id: "layout-shift-optimization",
    title: "피드카드 렌더링 타이밍 최적화를 통한 Layout Shift 제거",
    period: "2025.08.10 - 2025.08.11",
    company: "Flitto",
    tags: ["Nuxt 3", "SSR", "Lighthouse", "CLS"],
    summary:
      "API 호출 타이밍을 CSR에서 SSR로 변경하여 레이아웃 시프트 완전 제거. CLS 0.474 → 0.001 (99.8% 개선), Lighthouse 성능 점수 63 → 83점.",
    sections: [
      {
        title: "배경/문맥",
        content:
          "사용자가 페이지를 열면 처음엔 빈 공간이 보이다가 콘텐츠가 늦게 나타나면서 화면 전체가 아래로 밀리는 현상이 발생했습니다. 사용자가 버튼을 클릭하려는 순간 화면이 움직여 엉뚱한 곳을 클릭하게 되는 문제가 빈번했습니다.\n\nLighthouse 성능 측정 결과 CLS 점수: 0.474 (심각한 수준), 전체 성능 점수: 63점",
        images: ["/images/portfolio/layoutshift1.png"],
      },
      {
        title: "문제 상황",
        items: [
          "피드카드 데이터를 클라이언트에서 fetch",
          "초기 HTML에는 피드카드 영역이 비어있고, JavaScript 실행 후 데이터를 받아와 DOM을 그리면서 Layout Shift 발생",
          "ref + 비동기 초기화 방식: SSR의 이점을 활용하지 못하고 클라이언트에서 추가 렌더링 유발",
          "사용자 클릭 타이밍에 레이아웃 변경: 버튼을 누르려는 순간 화면이 밀려 엉뚱한 곳 클릭",
        ],
      },
      {
        title: "기술적 의사결정",
        subsections: [
          {
            title: "기존 구조의 문제점",
            code: `// Before: ref + 비동기 초기화
const feedCardData = ref([])

async function initRealFeedCardData() {
  feedCardData.value = await fetchFeedCards()
}

onMounted(() => {
  initRealFeedCardData()
})`,
            content:
              "서버에서는 빈 배열로 HTML이 생성되고, 클라이언트에서 마운트 후 API를 호출해 데이터가 도착하면 DOM을 다시 그리면서 Layout Shift가 발생했습니다.",
          },
          {
            title: "개선: API 호출 타이밍을 SSR 단계로 변경",
            code: `// After: computed + SSR에서 미리 fetch
const feedCardData = await fetchFeedCards()

const realFeedCardData = computed(() => {
  return feedCardData
})`,
            content:
              "서버에서 데이터를 fetch하고 피드카드가 포함된 완성된 HTML을 생성해서 클라이언트에서 추가 렌더링 없이 Layout Shift를 제거했습니다.",
          },
          {
            title: "이 기술을 선택한 이유",
            items: [
              "API 호출 타이밍을 CSR → SSR로 변경하는 것만으로 해결 가능했기 때문에 skeleton UI나 placeholder 같은 추가 작업이 필요 없었음",
              "ref를 computed로 전환해 SSR에서 가져온 데이터를 반응형으로 동기화되도록 하여 하이드레이션 불일치 방지",
              "FCP가 0.2초 증가했지만(0.8초 → 1.0초), Layout Shift가 완전히 사라진 것이 사용자 경험 측면에서 훨씬 중요",
            ],
          },
        ],
      },
      {
        title: "달성 성과",
        images: ["/images/portfolio/layoutshift2.png"],
        items: [
          "CLS 점수 0.474 → 0.001로 99.8% 개선",
          "Lighthouse 성능 점수 63점 → 83점으로 20점 상승",
          "권장사항 점수 78점 → 100점 달성",
          "FCP 0.2초 증가(0.8초 → 1.0초)는 전체 UX 관점에서 허용 가능한 트레이드오프",
        ],
      },
      {
        title: "임팩트",
        content:
          "Layout Shift로 인한 의도치 않은 클릭 실수가 사라지고 사용자 만족도가 크게 향상되었습니다. 특히 모바일 환경에서 스크롤 중 콘텐츠 로딩으로 클릭 위치가 바뀌는 문제가 해결되었습니다.\n\nAPI 호출 타이밍만 변경하는 단순한 접근으로 큰 효과를 거뒀고, 이 경험을 바탕으로 다른 페이지에도 동일한 패턴을 적용할 수 있는 기반을 마련했습니다.",
      },
      {
        title: "한계점 및 추후 고도화 방향",
        items: [
          "SSR 적용으로 서버 부하가 증가",
          "피드카드 외 다른 영역도 같은 방식으로 최적화 가능하지만 아직 미적용",
        ],
      },
    ],
  },
  {
    id: "race-condition-analysis",
    title: "중복 클릭으로 인한 500 에러 근본 원인 분석 및 해결",
    period: "2025.08.12 - 2025.08.13",
    company: "Flitto",
    tags: ["Datadog", "OpenSearch", "Vue 3", "Race Condition"],
    summary:
      "Slack 알림으로 간헐적 500 에러 감지, OpenSearch 로그 분석으로 0.5~0.6초 간격 중복 요청 패턴 발견. Vue 반응성 시스템의 비동기 특성으로 인한 레이스 컨디션 진단 및 해결.",
    sections: [
      {
        title: "배경/문맥",
        content:
          "서비스 규모가 확대되고 글로벌 사용자가 증가하면서 국내 환경에서는 재현되지 않는 문제나 간헐적으로 발생하는 에러를 효과적으로 추적하고 해결하는 것이 과제였습니다.",
      },
      {
        title: "문제 상황",
        items: [
          "간헐적으로 발생하는 카드 제출 500 에러: 모든 디바이스와 네트워크 환경에서 무작위로 발생, 재현 어려움",
          "빈 body로 PUT 요청 발생: 로그 확인 결과 body가 비어있는 상태로 요청이 들어옴",
          "기존 방어 로직이 있음에도 발생: debounce 0.3초와 버튼 비활성화가 이미 적용되어 있었지만 에러 지속",
        ],
      },
      {
        title: "기술적 의사결정",
        subsections: [
          {
            title: "1단계: 초기 에러 감지",
            content:
              "Slack 알림으로 카드 제출 API에서 500 에러 발생을 감지했습니다. 로그를 확인해보니 body가 비어있는 상태로 PUT 요청이 들어오는 것을 발견했고, 간헐적으로 여러 유저에게 발생하고 있었습니다.",
            images: ["/images/portfolio/racecondition1.png"],
            code: `[50x ERROR] PUT /api/1.3/arcade/stt-qc/cards/xxx?feed_card_id=5 500
{"statusCode":500,"error":"INTERNAL_SERVER_ERROR","code":5002}
[body] {}`,
          },
          {
            title: "2단계: 유저 패턴 분석",
            content:
              "특정 유저군에서만 발생하는 건 아닐까 의심해서 발생한 유저들의 특징을 분석해봤는데 특별한 공통점은 발견되지 않았습니다. 그렇다면 코드 로직에 문제가 있을 가능성이 높다고 판단했습니다.",
          },
          {
            title: "3단계: API 호출 흐름 추적",
            content:
              "OpenSearch에서 에러가 발생한 유저 중 한 명을 선택해서 API 호출 흐름을 자세히 분석해봤더니 이상한 패턴을 발견했습니다. 같은 시간대에 연속적인 PUT 요청들이 0.5~0.6초 간격으로 발생하고 있었습니다.",
            images: ["/images/portfolio/racecondition2.png"],
            code: `2025-08-13 @ 09:47:52.247 - 200 PUT {"label_id":4}
2025-08-13 @ 09:47:30.316 - 500 PUT -
2025-08-13 @ 09:47:29.827 - 500 PUT -
2025-08-13 @ 09:47:29.207 - 200 PUT {"label_id":3}`,
          },
          {
            title: "4단계: 기존 방어 로직 검토",
            content:
              "제출 시 버튼 비활성화와 동시에 debounce 0.3초가 적용되어 있었습니다. 하지만 로그상 0.5~0.6초 간격으로 요청이 나가고 있어서 방어 코드가 의도대로 동작하지 않는다고 판단했습니다. 즉, debounce 적용 시간(0.3초) ~ 비활성화 시간 사이에 중복 클릭이 가능했다는 것입니다.",
          },
          {
            title: "5단계: 코드 분석",
            content:
              "공용으로 사용 중인 제출 버튼 내부에 debounce가 걸려있었는데, 이것이 문제가 된 이유는 다음과 같은 흐름 때문이었습니다: 버튼 컴포넌트 클릭 → debounce 0.3초 → emit('click') → onSubmit 로직 실행 → 버튼 비활성화. 이렇게 되면 0.3초 후에 버튼의 비활성화가 진행되는 것입니다.",
          },
          {
            title: "6단계: Body가 비었던 이유 분석",
            content:
              "Vue의 반응성 시스템 특성 때문에 문제가 악화되고 있었습니다:\n1. 첫 번째 클릭: onSubmit 실행 시작\n2. 두 번째 클릭: 아직 버튼이 DOM에서 비활성화되지 않아 onSubmit 또 실행\n3. 첫 번째 요청 완료: clearAllStatus() → submitBody = null\n4. Vue가 다음 tick에서 DOM 업데이트 스케줄링 (지연 발생)\n5. 두 번째 요청 실행: 이미 null인 submitBody를 참조하여 빈 body로 API 호출",
          },
          {
            title: "해결책: 즉시 비활성화",
            content:
              "Vue의 반응성 시스템을 거치지 않고 클릭 이벤트 핸들러에서 즉시 상태를 변경하여 물리적 중복 클릭을 원천 차단했습니다. debounce를 제거하고 클릭 즉시 버튼을 비활성화하는 방식으로 변경했습니다.",
          },
        ],
      },
      {
        title: "달성 성과",
        items: [
          "간헐적 500 에러 해결",
          "OpenSearch 로그 분석을 통한 레이스 컨디션 근본 원인 진단",
          "네트워크 환경과 무관하게 안정적인 제출 기능 구현",
        ],
      },
      {
        title: "임팩트",
        content:
          '간헐적으로 발생하던 에러를 완전히 해결해 사용자 경험이 개선됐습니다. 단순히 "중복 클릭 방지"라는 표면적 해결이 아니라, Vue의 반응성 시스템과 네트워크 지연이 결합되어 발생하는 레이스 컨디션의 근본 원인을 파악하고 제거했습니다.\n\nOpenSearch 로그 분석을 통해 0.5~0.6초 간격의 패턴을 발견한 것이 핵심이었고, 이를 바탕으로 debounce가 오히려 문제를 일으킨다는 것을 깨달았습니다. 에러 발생 → 로그 분석 → 패턴 발견 → 근본 원인 진단 → 해결의 체계적인 문제 해결 과정을 경험했습니다.',
      },
      {
        title: "한계점 및 추후 고도화 방향",
        items: [
          "에러 알림 기준(threshold)이 명확하지 않아 노이즈성 알림도 많이 발생",
          "Datadog과 OpenSearch 로그가 분리되어 있어 클라이언트-서버 에러 상관관계 파악 어려움",
          "Slack 알림이 너무 많아서 중요한 에러를 놓칠 위험 존재, 에러 심각도별 필터링 필요",
        ],
      },
    ],
  },
];
