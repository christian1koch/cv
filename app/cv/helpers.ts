import { CvData } from "./data";
import { SidebarContent } from "./sidebar/sidebar-types";

export function dataToSidebarContent(data: CvData): SidebarContent[] {
  return [
    {
      title: "Contact Information",
      id: data.contactInformation.id,
    },
    {
      title: data.about.heading,
      id: data.about.id,
    },
    {
      title: data.skills.heading,
      id: data.skills.id,
    },
    {
      title: data.experience.heading,
      id: data.experience.id,
      children: data.experience.items.map((item) => ({
        title: item.company,
        id: item.id,
      })),
    },
  ];
}

export function headingToHref(heading: string): string {
  return `#${heading.toLowerCase().replace(" ", "-")}`;
}
