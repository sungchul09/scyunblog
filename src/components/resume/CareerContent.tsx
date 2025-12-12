// CareerContent.tsx
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
    <div className={containerStyle}>
      <div className={topRowStyle}>
        <div className={companyRowStyle}>
          <h3 className={companyNameStyle}>{companyName}</h3>
          {teamName && (
            <>
              <span className={dividerStyle} />
              <span className={teamNameStyle}>{teamName}</span>
            </>
          )}
        </div>
        <span className={periodStyle}>{period}</span>
      </div>
      {position && <p className={positionStyle}>{position}</p>}
    </div>
  );
}

const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const topRowStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  flexWrap: "wrap",
});

const companyRowStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const companyNameStyle = css({
  fontSize: "15px",
  fontWeight: "600",
  color: "label.primary",
});

const dividerStyle = css({
  width: "1px",
  height: "12px",
  bgColor: "gray.300",
});

const teamNameStyle = css({
  fontSize: "14px",
  color: "label.secondary",
  fontWeight: "500",
});

const periodStyle = css({
  fontSize: "13px",
  color: "label.secondary",
  flexShrink: 0,
});

const positionStyle = css({
  fontSize: "14px",
  color: "label.secondary",
});
