import { ScrollArea } from "@/components/ui/scroll-area";
import SidebarElement from "@/components/ui/sidebar-element";
import { SidebarContent } from "./sidebar-types";

interface SidebarProps {
  sidebarContent: SidebarContent[];
}

export const Sidebar: React.FC<SidebarProps> = ({ sidebarContent }) => {
  return (
    <div className="fixed h-full">
      <ScrollArea className=" h-full w-60 pl-4">
        <div className="p-4">
          <ul className="mt-2">
            {sidebarContent.map((content) => (
              <li key={`sidebar ${content.link}`} className="my-4">
                <SidebarElement href={content.link}>
                  {content.title}
                  {content.children ? (
                    <ul>
                      {content.children.map((child) => (
                        <li key={`sidebar ${child.link}`}>
                          <SidebarElement href={child.link}>
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
