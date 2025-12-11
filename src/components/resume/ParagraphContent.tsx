import { css } from "@/styled-system/css";
import React from "react";

export default function ParagraphBlock({
  title,
  content,
}: {
  title?: string;
  content: string;
}) {
  return (
    <div className={strengthItemStyle}>
      <h3 className={strengthTitleStyle} style={{ marginBottom: "10px" }}>
        {title}
      </h3>
      <p className={paragraphStyle}>{content}</p>
    </div>
  );
}

const strengthTitleStyle = css({
  fontSize: "16px",
  fontWeight: "600",
  color: "primary",
});

const strengthItemStyle = css({
  // bgColor: "bg.grouped.base",
  // p: "20px",
  // rounded: "8px",
  // borderInlineStartWidth: "4px",
  // borderInlineStartStyle: "solid",
  // borderInlineStartColor: "label.secondary",
});

const paragraphStyle = css({
  fontSize: "15px",
  lineHeight: "1.7",
  color: "label.primary",
  mb: "12px",
});
