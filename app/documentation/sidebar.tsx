"use client";
import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import SidebarLink from "@/components/ui/sidebar-link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  return (
    <div className="fixed h-full">
      <ScrollArea className=" w-60 h-full pl-4">
        <div className="p-4">
          <h4 className="font-semibold text-sm">Hooks</h4>
          <ul className="mt-2">
            <li className="my-4">
              <SidebarLink href="/documentation/use-boolean">
                useBoolean
              </SidebarLink>
            </li>
            <li className="my-4">
              <SidebarLink href="use-clipboard">useClipboard</SidebarLink>
            </li>
            <li className="my-4">
              <SidebarLink href="use-constant">useConstant</SidebarLink>
            </li>
          </ul>
        </div>
      </ScrollArea>
    </div>
  );
}
