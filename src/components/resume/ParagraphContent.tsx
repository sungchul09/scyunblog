// ParagraphContent.tsx
import { css } from "@/styled-system/css";
import React from "react";

export default function ParagraphContent({
  title,
  content,
}: {
  title?: string;
  content: string;
}) {
  return (
    <div className={containerStyle}>
      {title && <h3 className={titleStyle}>{title}</h3>}
      <p
        className={paragraphStyle}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "7px",
});

const titleStyle = css({
  fontSize: "16px",
  fontWeight: "600",
  color: "label.primary",
});

const paragraphStyle = css({
  fontSize: "16px",
  lineHeight: "1.8",
  color: "label.primary",
});
