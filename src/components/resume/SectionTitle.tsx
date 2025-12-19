// SectionTitle.tsx
import React from "react";
import { css } from "@/styled-system/css";

export default function SectionTitle({ text }: { text: string }) {
  return <h2 className={sectionTitleStyle}>{text}</h2>;
}

const sectionTitleStyle = css({
  fontSize: "20px",
  fontWeight: "800",
  color: "label.primary",
  textTransform: "uppercase",
  letterSpacing: "1px",
});
