"use client";
import { CkH2 } from "@/components/ui/typography";
import { ContactInformation } from "./contact-information/contact-infomation";
import { cvData } from "./data";
import TextSection from "./shared/text-section";
import { Sidebar } from "./sidebar/sidebar";
import { dataToSidebarContent } from "./sidebar/sidebar-helpers";
import SkillsSection from "./skills/skills-section";
import WorkExperienceCard from "./work-experience/work-experience-card";
import { TitleWrapper } from "@/components/ui/section-wrapper";
import { ContactForm } from "./contact-me/contact-form";

export default function CvPage() {
  return (
    <>
      <Sidebar sidebarContent={dataToSidebarContent(cvData)} />
      <div className="container mx-auto mt-14 flex max-w-2xl flex-col">
        <ContactInformation {...cvData.contactInformation} />

        <TitleWrapper>
          <CkH2 data-section={cvData.about.id} id={cvData.about.id}>
            {cvData.about.heading}
          </CkH2>
        </TitleWrapper>
        <TextSection>{cvData.about.content}</TextSection>
        <TitleWrapper>
          <CkH2 data-section={cvData.skills.id} id={cvData.skills.id}>
            {cvData.skills.heading}
          </CkH2>
        </TitleWrapper>
        <div>
          <SkillsSection skills={cvData.skills.list} />
        </div>
        <TitleWrapper>
          <CkH2 data-section={cvData.experience.id} id={cvData.experience.id}>
            {cvData.experience.heading}
          </CkH2>
        </TitleWrapper>
        {cvData.experience.items[0] ? (
          <WorkExperienceCard workExperience={cvData.experience.items[0]} />
        ) : null}
        <TitleWrapper>
          <CkH2 data-section={"contact-me"} id={"contact-me"}>
            Contact Me
          </CkH2>
        </TitleWrapper>
        <div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
