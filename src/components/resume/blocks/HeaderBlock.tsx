import { css } from "@/styled-system/css";
import React from "react";
import AboutBlock from "./AboutBlock";

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

const BirthdayIcon = () => (
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
    <path d="M7 20h10" />
    <path d="M7 16h10" />
    <path d="M12 6v4" />
    <path d="M12 2c1 1 1 2 0 3-1-1-1-2 0-3z" />
    <rect x="3" y="16" width="18" height="4" rx="1" />
    <path d="M3 11.2C3 10 4 9 5.2 9h13.6c1.2 0 2.2 1 2.2 2.2v1.6c0 .6-.4 1.2-1 1.2H4c-.6 0-1-.6-1-1.2v-1.6z" />
  </svg>
);

export default function HeaderBlock() {
  const title = "윤성철";
  const subtitle = "Frontend Developer";
  const contactInfoList = [
    {
      icon: <BirthdayIcon />,
      text: "1992.10.14",
    },
    {
      icon: <EmailIcon />,
      text: "sungchul09@naver.com",
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
      <AboutBlock />
      {/* <img
        w={80}
        h={80}
        src="/images/resume/profile.png"
        alt="profile"
        className={photoStyle}
      /> */}
    </header>
  );
}

const headerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  borderBlockEnd: "2px solid token(colors.primary)",
});

const infoSectionStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const topRowStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "14px",
});

const nameStyle = css({
  fontSize: "32px",
  fontWeight: "700",
  color: "primary",
});

const dividerStyle = css({
  width: "1px",
  height: "22px",
  bgColor: "gray.300",
});

const roleStyle = css({
  fontSize: "18px",
  fontWeight: "500",
  color: "label.secondary",
});

const contactRowStyle = css({
  display: "flex",
  gap: "18px",
  fontSize: "14px",
  color: "label.secondary",
});

const contactItemStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

const photoStyle = css({
  width: "100px",
  height: "100px",
  objectFit: "cover",
  rounded: "100%",
  flexShrink: 0,
  bgColor: "gray.100",
});
