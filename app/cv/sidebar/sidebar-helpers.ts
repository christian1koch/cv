import { CvData } from "../data";
import { SidebarContent } from "./sidebar-types";

export function isSidebarContentActive(
  content: SidebarContent,
  activeId: string | undefined
) {
  if (!activeId) {
    return false;
  }
  let isActive = false;
  if (content.id === activeId) {
    return true;
  }
  isActive = !!content.children?.some((c) => c.id === activeId);
  return isActive;
}

export function dataToSidebarContent(data: CvData): SidebarContent[] {
  return [
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
    {
      title: "Contact Me",
      id: "contact-me",
    },
  ];
}

export function headingToHref(heading: string): string {
  return `#${heading.toLowerCase().replace(" ", "-")}`;
}
