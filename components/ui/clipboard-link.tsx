"use client";
import { Link2Icon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, useRef } from "react";
import { Button } from "./button";

interface ClipboardLinkProps extends ComponentPropsWithoutRef<"a"> {
  clipboardLink: string | undefined;
}

function ClipboardLink({
  clipboardLink = "",
  onClick,
  ...rest
}: ClipboardLinkProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const currentHref = anchorRef.current?.href;
    if (currentHref) {
      await navigator.clipboard.writeText(currentHref);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button asChild size="icon" variant="ghost">
      <a
        {...rest}
        ref={anchorRef}
        href={`#${clipboardLink}`}
        onClick={handleClick}
      >
        <Link2Icon className="h-5 w-5" />
      </a>
    </Button>
  );
}

export default ClipboardLink;
