import React from "react";
import { CkP } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

// TODO: Shouldnt this be like a `TextSection` component inside the components folder?
export type TextSectionProps = React.ComponentPropsWithoutRef<"div">;

const TextSection = (props: TextSectionProps) => {
  const { className, ...rest } = props;
  return (
    <div className={cn(className, " text-muted-foreground")} {...props}>
      <CkP>{rest.children}</CkP>
    </div>
  );
};

export default TextSection;
