"use client";
import Link from "next/link";
import ColorPicker, { Color } from "@/components/ui/color-picker";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

const defaultColors: Color[] = [
  { value: "#2C3E50", label: "Zinc" },
  { value: "#E74C3C", label: "Rose" },
  { value: "#2ECC71", label: "Green" },
  { value: "#3498DB", label: "Blue" },
  { value: "#F39C12", label: "Orange" },
];

export default function Navbar() {
  // default colors are zinc, rose, green, blue and orange in hex

  return (
    <>
      <div className="fixed top-0 z-10 flex w-full items-center justify-between bg-background p-2">
        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  className=" text-muted-foreground transition-colors hover:text-primary"
                  href="/"
                >
                  CKE Projects
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className=" flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  className="mr-5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  href="/documentation"
                >
                  Documentation
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  className="mr-5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  href="/project-structure"
                >
                  Project Structure
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ColorPicker colors={defaultColors} />
          <ModeToggle />
        </div>
      </div>
      <Separator />
    </>
  );
}
