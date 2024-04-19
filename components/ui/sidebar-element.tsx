import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SidebarElement({
  href,
  children,
  isActive,
}: Readonly<{
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}>) {
  const activeClassName = isActive ? "text-primary" : "";
  return (
    <Link
      className={cn(
        "text-sm text-muted-foreground transition-colors hover:text-primary",
        activeClassName
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
