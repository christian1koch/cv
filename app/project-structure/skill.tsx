import { Progress } from "@/components/ui/progress";
import { CkH3 } from "@/components/ui/typography";

export enum SkillLevels {
  Basic = 1,
  Intermediate,
  Advanced,
  Proficient,
  Master,
  Expert,
}

export interface Skill {
  name: string;
  level: SkillLevels;
}

export const SkillIndicator = ({ level }: Omit<Skill, "name">) => {
  const maxNumberOfLevels = Object.keys(SkillLevels).length / 2; // Since it's a enum, we need to divide by 2 to get the number of levels
  const levelInPercent = (level * 100) / maxNumberOfLevels;

  return <Progress value={levelInPercent} />;
};
