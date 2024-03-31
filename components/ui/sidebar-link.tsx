"use-client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isActive = pathname.includes(href);
  const activeClassName = isActive ? "text-primary" : "";
  return (
    <Link
      className={cn(
        "text-sm text-muted-foreground hover:text-primary transition-colors",
        activeClassName
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
