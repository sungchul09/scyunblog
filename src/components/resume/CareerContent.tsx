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
        <span className={positionStyle}>{position}</span>
      </div>
      {period && <p className={periodStyle}>{period}</p>}
    </div>
  );
}

const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

const topRowStyle = css({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
});

const companyRowStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const companyNameStyle = css({
  fontSize: "17px",
  fontWeight: "600",
  color: "label.primary",
});

const dividerStyle = css({
  width: "1px",
  height: "14px",
  bgColor: "gray.300",
});

const teamNameStyle = css({
  fontSize: "16px",
  color: "label.secondary",
  fontWeight: "500",
});

const periodStyle = css({
  fontSize: "14px",
  color: "label.secondary",
  flexShrink: 0,
});

const positionStyle = css({
  fontSize: "16px",
  color: "label.secondary",
  fontWeight: "500",
});
