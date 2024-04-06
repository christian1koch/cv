export function CkH1({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}
export function CkH2({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}
export function CkH3({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
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
