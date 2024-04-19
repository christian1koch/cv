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
