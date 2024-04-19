"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import SidebarElement from "@/components/ui/sidebar-element";
import { SidebarContent } from "./sidebar-types";
import useActiveElement from "./use-active-section";
import { isSidebarContentActive } from "./sidebar-helpers";

interface SidebarProps {
  sidebarContent: SidebarContent[];
}

export const Sidebar: React.FC<SidebarProps> = ({ sidebarContent }) => {
  const activeSection = useActiveElement("[data-section]");
  console.log(activeSection);

  return (
    <div className="fixed h-full">
      <ScrollArea className=" h-full w-60 pl-4">
        <div className="p-4">
          <ul className="mt-2">
            {sidebarContent.map((content) => (
              <li key={`sidebar ${content.id}`} className="my-4">
                <SidebarElement
                  href={content.id}
                  isActive={isSidebarContentActive(content, activeSection)}
                >
                  {content.title}
                  {content.children ? (
                    <ul>
                      {content.children.map((child) => (
                        <li key={`sidebar ${child.id}`} className="mx-4">
                          <SidebarElement
                            href={child.id}
                            isActive={isSidebarContentActive(
                              child,
                              activeSection
                            )}
                          >
                            {child.title}
                          </SidebarElement>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </SidebarElement>
              </li>
            ))}
          </ul>
        </div>
      </ScrollArea>
    </div>
  );
};
