import { Skill } from "./skill";

export interface CvData {
  name: string;
  role: string;
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
    items: {
      company: string;
      position: string;
      responsibilities: string[];
    }[];
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

export const cvData: CvData = {
  name: "Christian Koch Echeverria",
  role: "Software Engineering with focus on React-based systems",
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
        responsibilities: [
          "Implementing new Features",
          "Grooming tickets before sprint",
          "Fixing bugs during and in-between sprints",
          "Tackling technical stories to improve performance and our code quality",
          "Aligning with Backend Team for Rest APIs",
        ],
      },
    ],
  },
};
