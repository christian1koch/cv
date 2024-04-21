import { cn } from "@/lib/utils";

interface H1Props extends React.ComponentPropsWithoutRef<"h1"> {
  children: React.ReactNode;
}

interface H2Props extends React.ComponentPropsWithoutRef<"h2"> {
  children: React.ReactNode;
  ["data-section"]?: string;
}

interface H3Props extends React.ComponentPropsWithoutRef<"h3"> {
  children: React.ReactNode;
}

interface PProps extends React.ComponentPropsWithoutRef<"p"> {
  children: React.ReactNode;
}

export function CkH1({ children, className, ...rest }: Readonly<H1Props>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}
export function CkH2({
  children,
  className,
  "data-section": dataSection,
  id,
  ...rest
}: Readonly<H2Props>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      data-section={dataSection}
      id={id}
      {...rest}
    >
      {children}
    </h2>
  );
}
export function CkH3({ children, className, ...rest }: Readonly<H3Props>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}
export function CkP({ children, className, ...rest }: Readonly<PProps>) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...rest}
    >
      {children}
    </p>
  );
}
