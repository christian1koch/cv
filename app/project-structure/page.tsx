import { CkH1, CkH2, CkH3, CkP } from "@/components/ui/typography";
import { cvData } from "./data";
import { SkillIndicator } from "./skill";
import SkillsSection from "./skills-section";

export default function CvPage() {
  return (
    <div className="container flex flex-col mx-auto max-w-2xl">
      <CkH1>{cvData.name}</CkH1>
      <CkP>{cvData.role}</CkP>
      <CkH2>{cvData.about.heading}</CkH2>
      <CkP>{cvData.about.content}</CkP>
      <CkH2>{cvData.skills.heading}</CkH2>
      <div>
        <SkillsSection skills={cvData.skills.list} />
      </div>
      <CkH2>{cvData.experience.heading}</CkH2>
      {cvData.experience.items.map((item, index) => (
        <div key={index}>
          <CkH3>{item.company}</CkH3>
          <CkH3>{item.position}</CkH3>
          <CkP>
            <ul>
              {item.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </CkP>
        </div>
      ))}
    </div>
  );
}
