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
      <div className="container mx-auto mt-14 flex max-w-2xl flex-col">
        <ContactInformation
          {...cvData.contactInformation}
          id={cvData.contactInformation.id}
        />

        <div className=" mb-16 mt-14">
          <CkH2 data-section={cvData.about.id} id={cvData.about.id}>
            {cvData.about.heading}
          </CkH2>
        </div>
        <TextSection>{cvData.about.content}</TextSection>
        <div className=" mb-16 mt-14">
          <CkH2 data-section={cvData.skills.id} id={cvData.skills.id}>
            {cvData.skills.heading}
          </CkH2>
        </div>
        <div>
          <SkillsSection skills={cvData.skills.list} />
        </div>
        <div className=" mb-16 mt-14">
          <CkH2 data-section={cvData.experience.id} id={cvData.experience.id}>
            {cvData.experience.heading}
          </CkH2>
        </div>
        {cvData.experience.items[0] ? (
          <WorkExperienceCard workExperience={cvData.experience.items[0]} />
        ) : null}
      </div>
    </>
  );
}
