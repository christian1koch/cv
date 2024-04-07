export interface TextSectionProps
  extends React.ComponentPropsWithoutRef<"div"> {}

import { CkP } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import React from "react";

const TextSection = (props: TextSectionProps) => {
  const { className, ...rest } = props;
  return (
    <div className={cn(className, " text-muted-foreground")} {...props}>
      <CkP>{rest.children}</CkP>
    </div>
  );
};

export default TextSection;
