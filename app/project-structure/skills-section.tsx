import React from "react";
import { CkH3 } from "@/components/ui/typography";
import { Skill, SkillIndicator } from "./skill";

interface SkillSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillSectionProps) => {
  return (
    <>
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex h-12 w-full flex-row justify-around"
        >
          <div className="flex h-full w-1/3 items-center justify-start">
            <CkH3>{skill.name}</CkH3>
          </div>
          <div className="flex h-full w-1/3 items-center justify-start">
            <SkillIndicator level={skill.level} />
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillsSection;
