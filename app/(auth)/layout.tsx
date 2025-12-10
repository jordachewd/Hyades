export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-dvh relative">
      <main className="auth">{children}</main>
      <div className="root-background"></div>
    </div>
  );
}
