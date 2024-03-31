import { Sidebar } from "./sidebar";

export default function DocumentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className=" mr-64">
        <Sidebar />
      </div>
      {children}
    </div>
  );
}
