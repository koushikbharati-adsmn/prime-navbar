import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-dvh flex-col">
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Navbar />
    </div>
  ),
});
