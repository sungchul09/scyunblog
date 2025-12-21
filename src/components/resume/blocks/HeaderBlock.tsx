import { css } from "@/styled-system/css";
import React from "react";

const EmailIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function HeaderBlock() {
  const title = "박세훈";
  const subtitle = "PD";
  const contactInfoList = [
    {
      icon: <PhoneIcon />,
      text: "010-8077-6969",
    },
    {
      icon: <EmailIcon />,
      text: "jaeyoung0526@naver.com",
    },
    // {
    //   icon: <GithubIcon />,
    //   text: "github.com/sungchul09",
    // },
  ];

  return (
    <header className={headerStyle}>
      <div className={infoSectionStyle}>
        <div className={topRowStyle}>
          <h1 className={nameStyle}>{title}</h1>
          <span className={dividerStyle} />
          <p className={roleStyle}>{subtitle}</p>
        </div>
        <div className={contactRowStyle}>
          {contactInfoList.map((contactInfo, index) => (
            <span key={index} className={contactItemStyle}>
              {contactInfo.icon}
              <span>{contactInfo.text}</span>
            </span>
          ))}
        </div>
      </div>
      <img
        src="/images/resume/IMG_3696.jpeg"
        alt="profile"
        className={photoStyle}
      />
    </header>
  );
}

const headerStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  borderBlockEnd: "2px solid token(colors.primary)",
});

const infoSectionStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const topRowStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const nameStyle = css({
  fontSize: "28px",
  fontWeight: "700",
  color: "primary",
});

const dividerStyle = css({
  width: "1px",
  height: "20px",
  bgColor: "gray.300",
});

const roleStyle = css({
  fontSize: "16px",
  fontWeight: "500",
  color: "label.secondary",
});

const contactRowStyle = css({
  display: "flex",
  gap: "16px",
  fontSize: "13px",
  color: "label.secondary",
});

const contactItemStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

const photoStyle = css({
  width: "140px",
  height: "140px",
  objectFit: "contain",
  rounded: "8px",
  flexShrink: 0,
});
