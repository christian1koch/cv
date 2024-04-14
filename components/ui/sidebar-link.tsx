"use-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
        "text-sm text-muted-foreground transition-colors hover:text-primary",
        activeClassName,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
