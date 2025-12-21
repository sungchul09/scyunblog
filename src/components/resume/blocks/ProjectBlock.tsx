// ProjectBlock.tsx
import React from "react";
import { css } from "@/styled-system/css";
import SectionTitle from "@/src/components/resume/SectionTitle";
import BlockWrapper from "@/src/components/resume/BlockWrapper";
import resumeData from "@/src/constants/resume.json";
import CareerContent from "../CareerContent";

export default function ProjectBlock() {
  const title = "프로그램 제작 이력";
  const projectList = resumeData.projects;

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
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={projectTitleLinkStyle}
                    >
                      <h4 className={projectTitleStyle}>{item.title}</h4>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  ) : (
                    <h4 className={projectTitleStyle}>{item.title}</h4>
                  )}
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
  flexDirection: "column",
  gap: "48px",
});

const companyBlockStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const companyHeaderStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "16px",
  borderBlockEnd: "1px solid token(colors.gray.200)",
  paddingBlockEnd: "12px",
});

const companyInfoStyle = css({
  display: "flex",
  gap: "8px",
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
  flexDirection: "column",
  gap: "30px",
});

const projectItemStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const projectTitleStyle = css({
  fontSize: "14px",
  fontWeight: "600",
  color: "label.primary",
});

const projectTitleLinkStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  textDecoration: "none",
  color: "label.primary",
  transition: "color 0.2s ease",
  _hover: {
    color: "brand.blue",
    "& svg": {
      color: "brand.blue",
    },
  },
  "@media print": {
    "& svg": {
      display: "none",
    },
  },
});

const listStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  listStyleType: "disc",
  listStylePosition: "outside",
  paddingInlineStart: "16px",
  "& li": {
    fontSize: "13px",
    lineHeight: "1.6",
    color: "label.primary",
  },
  "& strong": {
    fontWeight: "600",
    color: "primary",
  },
});
