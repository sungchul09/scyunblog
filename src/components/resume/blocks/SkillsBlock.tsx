// SkillsBlock.tsx
import React from "react";
import { css } from "@/styled-system/css";
import SectionTitle from "@/src/components/resume/SectionTitle";
import BlockWrapper from "@/src/components/resume/BlockWrapper";
import { resumeData } from "@/src/constants/resume";

export default function SkillsBlock() {
  const title = "Skills";
  const skillsList = resumeData.skills;

  return (
    <BlockWrapper>
      <SectionTitle text={title} />
      <div className={listStyle}>
        {skillsList.map((skill, index) => (
          <div key={index} className={itemStyle}>
            <span className={categoryStyle}>{skill.category}</span>
            <span className={itemsStyle}>{skill.items}</span>
          </div>
        ))}
      </div>
    </BlockWrapper>
  );
}

const listStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const itemStyle = css({
  display: "flex",
  gap: "12px",
  fontSize: "13px",
});

const categoryStyle = css({
  fontWeight: "600",
  color: "label.primary",
  minWidth: "100px",
  flexShrink: 0,
});

const itemsStyle = css({
  color: "label.primary",
});
