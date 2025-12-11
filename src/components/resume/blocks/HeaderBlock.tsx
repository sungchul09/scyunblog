import { css } from "@/styled-system/css";
import React from "react";

export default function HeaderBlock() {
  const title = "윤성철";
  const subtitle = "Frontend Developer";
  const contactInfoList = [
    {
      icon: "📧",
      text: "sungchul09@naver.com",
    },
    {
      icon: "🔗",
      text: "github.com/sungchul09",
    },
  ];

  return (
    <header className={headerStyle}>
      <h1 className={mainTitleStyle}>{title}</h1>
      <p className={subtitleStyle} style={{ marginBottom: "18px" }}>
        {subtitle}
      </p>
      <div className={contactInfoStyle}>
        {contactInfoList.map((contactInfo, index) => (
          <span key={index}>
            {contactInfo.icon} {contactInfo.text}
          </span>
        ))}
      </div>
    </header>
  );
}

const headerStyle = css({
  mb: "48px",
  borderBlockEndWidth: "3px",
  borderBlockEndStyle: "solid",
  borderBlockEndColor: "primary",
  pb: "24px",
});

const mainTitleStyle = css({
  fontSize: "36px",
  fontWeight: "700",
  // color: "green.60",
  color: "primary",
});

const subtitleStyle = css({
  fontSize: "18px",
  // color: "green.50",
  color: "label.secondary",
  mb: "16px",
});

const contactInfoStyle = css({
  display: "flex",
  columnGap: "20px",
  rowGap: "20px",
  fontSize: "14px",
  // color: "green.70",
  color: "label.secondary",
});
