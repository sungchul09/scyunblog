import { css } from "@/styled-system/css";
import React from "react";

export default function BlockWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      })}
    >
      {children}
    </div>
  );
}
