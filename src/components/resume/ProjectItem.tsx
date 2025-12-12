// ProjectItem.tsx
import React from "react";
import ListContent from "./ListContent";
import { css } from "@/styled-system/css";

export default function ProjectItem({
  title,
  list,
}: {
  title: string;
  list: string[];
}) {
  return (
    <div className={containerStyle}>
      <h4 className={titleStyle}>{title}</h4>
      <ListContent list={list} />
    </div>
  );
}

const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const titleStyle = css({
  fontSize: "14px",
  fontWeight: "600",
  color: "label.primary",
});
