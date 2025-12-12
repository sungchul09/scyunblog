// ListContent.tsx
import React from "react";
import { css } from "@/styled-system/css";

export default function ListContent({ list }: { list: string[] }) {
  return (
    <ul className={listStyle}>
      {list.map((item, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
  );
}

const listStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  listStyleType: "disc",
  listStylePosition: "outside",
  paddingInlineStart: "18px",
  "& li": {
    fontSize: "13px",
    lineHeight: "1.6",
    color: "label.primary",
  },
  "& strong": {
    fontWeight: "600",
  },
});
