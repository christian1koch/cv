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
