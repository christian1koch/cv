import { CkH1, CkH2 } from "@/components/ui/typography";
import { cvData } from "./data";
import TextSection from "./shared/text-section";
import SkillsSection from "./skills/skills-section";
import WorkExperienceCard from "./work-experience/work-experience-card";

export default function CvPage() {
  return (
    <div className="container mx-auto flex max-w-2xl flex-col">
      <div className=" mb-10 mt-20">
        <CkH1>{cvData.name}</CkH1>
      </div>
      <TextSection>{cvData.role}</TextSection>
      <div className=" mb-16 mt-14">
        <CkH2>{cvData.about.heading}</CkH2>
      </div>
      <TextSection>{cvData.about.content}</TextSection>
      <div className=" mb-16 mt-14">
        <CkH2>{cvData.skills.heading}</CkH2>
      </div>
      <div>
        <SkillsSection skills={cvData.skills.list} />
      </div>
      <div className=" mb-16 mt-14">
        <CkH2>{cvData.experience.heading}</CkH2>
      </div>
      {cvData.experience.items[0] ? (
        <WorkExperienceCard workExperience={cvData.experience.items[0]} />
      ) : null}
    </div>
  );
}
