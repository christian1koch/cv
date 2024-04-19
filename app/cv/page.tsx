"use client";
import { CkH2 } from "@/components/ui/typography";
import { ContactInformation } from "./contact-information/contact-infomation";
import { cvData } from "./data";
import { dataToSidebarContent } from "./helpers";
import TextSection from "./shared/text-section";
import { Sidebar } from "./sidebar/sidebar";
import SkillsSection from "./skills/skills-section";
import WorkExperienceCard from "./work-experience/work-experience-card";

export default function CvPage() {
  return (
    <>
      <Sidebar sidebarContent={dataToSidebarContent(cvData)} />
      <div
        className="container mx-auto mt-14 flex max-w-2xl flex-col"
        id={cvData.contactInformation.id}
      >
        <ContactInformation {...cvData.contactInformation} />

        <div
          className=" mb-16 mt-14"
          data-section={cvData.about.heading}
          id={cvData.about.id}
        >
          <CkH2>{cvData.about.heading}</CkH2>
        </div>
        <TextSection>{cvData.about.content}</TextSection>
        <div
          className=" mb-16 mt-14"
          data-section={cvData.skills.heading}
          id={cvData.skills.id}
        >
          <CkH2>{cvData.skills.heading}</CkH2>
        </div>
        <div>
          <SkillsSection skills={cvData.skills.list} />
        </div>
        <div
          className=" mb-16 mt-14"
          data-section={cvData.experience.heading}
          id={cvData.experience.id}
        >
          <CkH2>{cvData.experience.heading}</CkH2>
        </div>
        {cvData.experience.items[0] ? (
          <WorkExperienceCard workExperience={cvData.experience.items[0]} />
        ) : null}
      </div>
    </>
  );
}
