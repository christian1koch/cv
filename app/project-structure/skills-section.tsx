import { CkH3 } from "@/components/ui/typography";
import React from "react";
import { Skill, SkillIndicator } from "./skill";

interface SkillSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillSectionProps) => {
  return (
    <>
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="flex w-full flex-row h-12 justify-around"
        >
          <div className="flex items-center justify-start w-1/3 h-full">
            <CkH3 key={index}>{skill.name}</CkH3>
          </div>
          <div className="flex justify-start items-center h-full w-1/3">
            <SkillIndicator level={skill.level} />
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillsSection;
