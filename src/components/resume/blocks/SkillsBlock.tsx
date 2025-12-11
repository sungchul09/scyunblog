import React from "react";
import ListContent from "@/src/components/resume/ListContent";
import SectionTitle from "@/src/components/resume/SectionTitle";

export default function SkillsBlock() {
  const title = "Skills";
  const skillsList = [
    "<strong>Core:</strong> Vue 3, Nuxt 3, TypeScript, JavaScript, React, Next.js",
    "<strong>Infra & Build:</strong> pnpm, Turborepo, Vite",
    "<strong>DevOps:</strong> Jenkins, Docker, AWS, Nginx",
    "<strong>Collaboration:</strong> Storybook, Git, Figma, Jira, Slack, Swagger",
  ];

  return (
    <section>
      <SectionTitle text={title} />
      <ListContent list={skillsList} />
    </section>
  );
}
