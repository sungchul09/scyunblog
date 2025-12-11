import { css } from "@/styled-system/css";
import React from "react";

export default function CareerContent({
  companyName,
  teamName,
  period,
  position,
}: {
  companyName: string;
  teamName?: string;
  period: string;
  position?: string;
}) {
  return (
    <div>
      <div className={experienceHeaderStyle}>
        <h3 className={companyNameStyle}>
          {companyName}
          {teamName && <span className={teamNameStyle}>{teamName}</span>}
        </h3>
        <span className={periodStyle}>{period}</span>
      </div>
      {position && <p className={positionStyle}>{position}</p>}
    </div>
  );
}

const experienceHeaderStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  mb: "8px",
  flexWrap: "wrap",
  columnGap: "16px",
  rowGap: "16px",
});

const companyNameStyle = css({
  fontSize: "18px",
  fontWeight: "600",
  color: "primary",
});

const teamNameStyle = css({
  fontSize: "14px",
  color: "label.secondary",
  fontWeight: "500",
  ml: "10px",
});

const periodStyle = css({
  fontSize: "14px",
  color: "label.secondary",
  fontWeight: "500",
});

const positionStyle = css({
  fontSize: "15px",
  color: "label.secondary",
  fontWeight: "500",
});
