import { cn } from "@/lib/utils";

export function CkH1({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
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
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  ["data-section"]?: string;
  id: string;
}>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      data-section={dataSection}
      id={id}
    >
      {children}
    </h2>
  );
}
export function CkH3({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}
export function CkP({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}
