import MobileNav from "@/components/shared/MobileNav";
import Topbar from "@/components/shared/Topbar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <Topbar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <div className="root-background"></div>
      <Toaster />
    </main>
  );
}
