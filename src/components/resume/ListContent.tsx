import React from "react";
import { css } from "@/styled-system/css";
import SectionTitle from "./SectionTitle";

export default function ListContent({ list }: { list: string[] }) {
  return (
    <ul
      className={listStyle}
      style={{ paddingLeft: "20px", marginBottom: "0" }}
    >
      {list.map((item, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
  );
}

const listStyle = css({
  pl: "20px",
  mb: "0",
  listStyleType: "disc",
  "& li": {
    fontSize: "14px",
    lineHeight: "1.8",
    color: "label.primary",
    mb: "6px",
    "&:last-child": {
      mb: "0",
    },
  },
  "& strong": {
    color: "label.primary",
    fontWeight: "700",
  },
});
