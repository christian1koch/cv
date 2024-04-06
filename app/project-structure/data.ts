export const cvData = {
  name: "Christian Koch Echeverria",
  role: "Software Engineering with focus on React-based systems",
  about: {
    heading: "About",
    content:
      "As a Software Engineer with large experience on React, I have taken multiple projects from design to implementation, using the latest tools and technologies. I have work professionally with Typescript, React, Redux, i18n, Styled Components and much more libraries. In personal project I have work with Tailwind, Next.js, Java, Node.js, Express, MongoDB, PostgreSQL.",
  },
  skills: {
    heading: "Skills",
    list: [
      "TypeScript",
      "React",
      "Redux",
      "Javascript",
      "Java",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
    ],
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

export interface CvData {
  name: string;
  role: string;
  about: {
    heading: string;
    content: string;
  };
  skills: {
    heading: string;
    list: string[];
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
