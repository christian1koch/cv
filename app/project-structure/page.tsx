import { CkH1, CkH2, CkH3, CkP } from "@/components/ui/typography";
import { cvData } from "./data";
import { SkillIndicator } from "./skill";
import SkillsSection from "./skills-section";
import TextSection from "./text-section";
import WorkExperience from "./work-experience-card";

export default function CvPage() {
  const lotOfWhitespaceClassName = "mb-8";
  return (
    <div className="container flex flex-col mx-auto max-w-2xl">
      <div className=" mt-20 mb-10">
        <CkH1>{cvData.name}</CkH1>
      </div>
      <TextSection>{cvData.role}</TextSection>
      <div className=" mt-14 mb-16">
        <CkH2>{cvData.about.heading}</CkH2>
      </div>
      <TextSection>{cvData.about.content}</TextSection>
      <div className=" mt-14 mb-16">
        <CkH2>{cvData.skills.heading}</CkH2>
      </div>
      <div>
        <SkillsSection skills={cvData.skills.list} />
      </div>
      <div className=" mt-14 mb-16">
        <CkH2>{cvData.experience.heading}</CkH2>
      </div>
      <WorkExperience workExperience={cvData.experience.items[0]} />
    </div>
  );
}
