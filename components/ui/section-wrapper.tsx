import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export const TitleWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(className, "mb-16 mt-14")} {...props}>
      {children}
    </div>
  );
};
