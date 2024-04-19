import { cvData } from "./data";
import { dataToSidebarContent } from "./helpers";
import { Sidebar } from "./sidebar/sidebar";

export default function CvLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
