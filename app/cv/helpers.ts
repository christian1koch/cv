import { CvData } from "./data";
import { SidebarContent } from "./sidebar/sidebar-types";

export function dataToSidebarContent(data: CvData): SidebarContent[] {
  return [
    {
      title: "Contact Information",
      link: data.contactInformation.link,
    },
    {
      title: data.about.heading,
      link: data.about.link,
    },
    {
      title: data.skills.heading,
      link: data.skills.link,
    },
    {
      title: data.experience.heading,
      link: data.experience.link,
      children: data.experience.items.map((item) => ({
        title: item.company,
        link: `#${item.company}`,
      })),
    },
  ];
}

export function headingToHref(heading: string): string {
  return `#${heading.toLowerCase().replace(" ", "-")}`;
}
