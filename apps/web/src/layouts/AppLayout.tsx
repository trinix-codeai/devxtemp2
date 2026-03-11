import { Outlet } from "react-router-dom";
import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { BackToTop } from "../components/BackToTop";

export function AppLayout() {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
      <BackToTop />
    </div>
  );
}
