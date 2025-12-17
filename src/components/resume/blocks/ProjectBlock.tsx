// ProjectBlock.tsx
import React from "react";
import { css } from "@/styled-system/css";
import SectionTitle from "@/src/components/resume/SectionTitle";
import BlockWrapper from "@/src/components/resume/BlockWrapper";
import { resumeData } from "@/src/constants/resume";

interface ProjectItem {
  title: string;
  detailUrl?: string;
  items: string[];
}

interface Project {
  companyName: string;
  period: string;
  position: string;
  list: ProjectItem[];
}

export default function ProjectBlock() {
  const title = "Projects";
  const projectList = resumeData.projects as Project[];

  return (
    <BlockWrapper>
      <SectionTitle text={title} />
      <div className={projectListStyle}>
        {projectList.map((project, index) => (
          <div key={index} className={companyBlockStyle}>
            <div className={companyHeaderStyle}>
              <div className={companyInfoStyle}>
                <h3 className={companyNameStyle}>{project.companyName}</h3>
                <span className={teamNameStyle}>{project.position}</span>
              </div>
              <span className={periodStyle}>{project.period}</span>
            </div>
            <div className={projectItemsStyle}>
              {project.list.map((item, idx) => (
                <div key={idx} className={projectItemStyle}>
                  <div className={projectTitleContainerStyle}>
                    <h4 className={projectTitleStyle}>{item.title}</h4>
                    {item.detailUrl && (
                      <a
                        href={item.detailUrl}
                        className={detailLinkStyle}
                        aria-label="상세 보기"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12L10 8L6 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>상세보기</span>
                      </a>
                    )}
                  </div>
                  <ul className={listStyle}>
                    {item.items.map((li, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: li }} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BlockWrapper>
  );
}

const projectListStyle = css({
  display: "flex",
  flexDir: "column",
  rowGap: "48px",
});

const companyBlockStyle = css({
  display: "flex",
  flexDir: "column",
  rowGap: "20px",
});

const companyHeaderStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  columnGap: "16px",
  borderBlockEndWidth: "1px",
  borderBlockEndStyle: "solid",
  borderBlockEndColor: "gray.200",
  paddingBlockEnd: "12px",
});

const companyInfoStyle = css({
  display: "flex",
  columnGap: "8px",
});

const companyNameStyle = css({
  fontSize: "16px",
  fontWeight: "700",
  color: "label.primary",
});

const teamNameStyle = css({
  fontSize: "13px",
  color: "label.secondary",
});

const periodStyle = css({
  fontSize: "13px",
  color: "label.secondary",
  flexShrink: 0,
});

const projectItemsStyle = css({
  display: "flex",
  flexDir: "column",
  rowGap: "30px",
});

const projectItemStyle = css({
  display: "flex",
  flexDir: "column",
  rowGap: "8px",
});

const projectTitleContainerStyle = css({
  display: "flex",
  alignItems: "center",
  columnGap: "8px",
});

const projectTitleStyle = css({
  fontSize: "14px",
  fontWeight: "600",
  color: "label.primary",
});

const detailLinkStyle = css({
  display: "inline-flex",
  alignItems: "center",
  columnGap: "3px",
  fontSize: "12px",
  fontWeight: "400",
  color: "label.tertiary",
  textDecorationLine: "none",
  transitionProperty: "color",
  transitionDuration: "0.15s",
  flexShrink: 0,
  "& svg": {
    w: "12px",
    h: "12px",
    opacity: 0.6,
  },
  "&:hover": {
    color: "brand.blue",
    "& svg": {
      opacity: 1,
    },
  },
});

const listStyle = css({
  display: "flex",
  flexDir: "column",
  rowGap: "4px",
  listStyleType: "disc",
  listStylePosition: "outside",
  ps: "16px",
  "& li": {
    fontSize: "13px",
    lineHeight: "1.6",
    color: "label.primary",
  },
  "& strong": {
    fontWeight: "600",
    color: "label.primary",
  },
});
