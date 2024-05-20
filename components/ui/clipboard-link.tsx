import { Link2Icon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef } from "react";
import { Button } from "./button";

interface ClipboardLinkProps extends ComponentPropsWithoutRef<"a"> {
  clipboardLink: string;
}

function ClipboardLink({ clipboardLink, onClick }: ClipboardLinkProps) {
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    await navigator.clipboard.writeText(clipboardLink);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button asChild size="icon">
      <a href={`#${clipboardLink}`} onClick={handleClick}>
        <Link2Icon />
      </a>
    </Button>
  );
}

export default ClipboardLink;
