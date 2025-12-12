import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-bg-muted flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Pages are injected here based on route */}
        <Outlet />
      </main>
      <footer className="bg-bg-surface border-t border-border py-6 text-center text-text-secondary text-sm">
        © 2025 CoPark. All rights reserved.
      </footer>
    </div>
  );
};
