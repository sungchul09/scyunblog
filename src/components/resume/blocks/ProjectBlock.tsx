// ProjectBlock.tsx
import React from "react";
import { css } from "@/styled-system/css";
import SectionTitle from "@/src/components/resume/SectionTitle";
import BlockWrapper from "@/src/components/resume/BlockWrapper";
import { resumeData } from "@/src/constants/resume";

export default function ProjectBlock() {
  const title = "Projects";
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
                  {item.detailUrl ? (
                    <a
                      href={item.detailUrl}
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
  gap: "56px",
});

const companyBlockStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const companyHeaderStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "18px",
  borderBlockEnd: "1px solid token(colors.gray.200)",
  paddingBlockEnd: "14px",
});

const companyInfoStyle = css({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

const companyNameStyle = css({
  fontSize: "18px",
  fontWeight: "700",
  color: "label.primary",
});

const teamNameStyle = css({
  fontSize: "14px",
  color: "label.secondary",
});

const periodStyle = css({
  fontSize: "14px",
  color: "label.secondary",
  flexShrink: 0,
});

const projectItemsStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "36px",
});

const projectItemStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const projectTitleStyle = css({
  fontSize: "16px",
  fontWeight: "600",
  color: "label.primary",
});

const projectTitleLinkStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "7px",
  textDecoration: "none",
  color: "label.primary",
  transition: "color 0.2s ease",
  _hover: {
    color: "brand.blue",
    "& svg": {
      color: "brand.blue",
    },
  },
});

const listStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  listStyleType: "disc",
  listStylePosition: "outside",
  paddingInlineStart: "18px",
  "& li": {
    fontSize: "14px",
    lineHeight: "1.7",
    color: "label.primary",
  },
  "& strong": {
    fontWeight: "600",
    color: "primary",
  },
});
