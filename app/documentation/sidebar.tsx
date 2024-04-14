"use client";
import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import SidebarLink from "@/components/ui/sidebar-link";

export function Sidebar() {
  return (
    <div className="fixed h-full">
      <ScrollArea className=" w-60 h-full pl-4">
        <div className="p-4">
          <h4 className="font-semibold text-sm">Hooks</h4>
          <ul className="mt-2">
            <li className="my-4">
              <SidebarLink href="/documentation/useDelayedLoading">
                useDelayedLoading
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
