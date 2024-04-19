import { SidebarContent } from "./sidebar-types";

interface SidebarProps {
  sidebarContent: SidebarContent[];
}

export const Sidebar: React.FC<SidebarProps> = ({ sidebarContent }) => {
  return (
    <div className="sidebar">
      {sidebarContent.map((content) => (
        <div key={content.title} className="sidebar__item">
          <div className="sidebar__item-title">
            <span>{content.title}</span>
          </div>
          {content.children ? (
            <div className="sidebar__item-children">
              {content.children.map((child) => (
                <div key={child.title} className="sidebar__item">
                  <div className="sidebar__item-title">
                    <span>{child.title}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
