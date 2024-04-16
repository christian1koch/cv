import { Skill } from "./skills/skill-types";
import {
  Responsability,
  WorkExperience,
} from "./work-experience/work-experience-types";

export interface CvData {
  contactInformation: {
    email: string;
    phone: string;
    github?: string;
    linkedin?: string;
    image: string;
    name: string;
    role: string;
  };
  about: {
    heading: string;
    content: string;
  };
  skills: {
    heading: string;
    list: Skill[];
  };
  experience: {
    heading: string;
    items: WorkExperience[];
  };
}

const skillsList: Skill[] = [
  { name: "TypeScript", level: 6 },
  { name: "React", level: 6 },
  { name: "Redux", level: 5 },
  { name: "Javascript", level: 5 },
  { name: "Java", level: 5 },
  { name: "Next.js", level: 4 },
  { name: "Node.js", level: 4 },
  { name: "Express", level: 4 },
  { name: "MongoDB", level: 4 },
  { name: "PostgreSQL", level: 4 },
];

const responsibilities: Responsability[] = [
  {
    responsibility: "Implementing new Features",
    oneWordSummary: "Implementing",
  },
  {
    responsibility: "Grooming tickets before sprint",
    oneWordSummary: "Grooming",
  },
  {
    responsibility: "Fixing bugs during and in-between sprints",
    oneWordSummary: "Fixing",
  },
  {
    responsibility: "Improve performance and our code quality",
    oneWordSummary: "Techncial Stories",
  },
  {
    responsibility: "Aligning with Backend Team for Rest APIs",
    oneWordSummary: "BE-FE Communication",
  },
];

export const cvData: CvData = {
  contactInformation: {
    email: "ko.che@web.de",
    phone: "+49 176 234 567 89",
    github: "https://github.com/christian1koch",
    linkedin:
      "https://www.linkedin.com/in/christian-koch-echeverria-920860214/",
    name: "Christian Koch Echeverria",
    role: "Software Engineer with focus on React-based systems",
    image: "/images/profilePic.png",
  },
  about: {
    heading: "About",
    content:
      "As a Software Engineer with large experience on React, I have taken multiple projects from design to implementation, using the latest tools and technologies. I have work professionally with Typescript, React, Redux, i18n, Styled Components and much more libraries. In personal project I have work with Tailwind, Next.js, Java, Node.js, Express, MongoDB, PostgreSQL.",
  },
  skills: {
    heading: "Skills",
    list: skillsList,
  },
  experience: {
    heading: "Work Experience",
    items: [
      {
        company: "Valsight",
        position: "Frontend Web Developer",
        responsibilities,
        date: "2021 - Present",
      },
    ],
  },
};
