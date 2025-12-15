// ProjectBlock.tsx
import React from "react";
import { css } from "@/styled-system/css";
import SectionTitle from "@/src/components/resume/SectionTitle";
import BlockWrapper from "@/src/components/resume/BlockWrapper";
import resumeData from "@/src/constants/resume.json";

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
                  <h4 className={projectTitleStyle}>{item.title}</h4>
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
  flexDirection: "column",
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
