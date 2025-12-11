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
    <div>
      <h4 className={projectTitleStyle} style={{ marginBottom: "12px" }}>
        {title}
      </h4>
      <ListContent list={list} />
    </div>
  );
}

const projectTitleStyle = css({
  fontSize: "16px",
  fontWeight: "600",
  color: "label.primary",
  mb: "10px",
});
