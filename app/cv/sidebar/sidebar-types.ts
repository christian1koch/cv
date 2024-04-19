// For my sanity atm the sidebar can only have a depth of two.
export interface SidebarContent {
  title: string;
  id: string;
  children?: SidebarContent[];
}
