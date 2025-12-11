import React from "react";
import { css } from "@/styled-system/css";

export default function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className={sectionTitleStyle} style={{ marginBottom: "20px" }}>
      {text}
    </h2>
  );
}

const sectionTitleStyle = css({
  fontSize: "24px",
  fontWeight: "700",
  color: "primary",
  mb: "20px",
  pb: "8px",
  borderBlockEndWidth: "2px",
  borderBlockEndStyle: "solid",
  borderBlockEndColor: "label.secondary",
});
