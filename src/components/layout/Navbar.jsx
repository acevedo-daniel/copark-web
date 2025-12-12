import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <nav className="border-b border-[var(--color-border)] bg-[var(--color-bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[var(--color-text-primary)]">
            CoPark
          </Link>

          {/* Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/parkings"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-medium"
            >
              Explore
            </Link>
            <Link
              to="/dashboard"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-medium"
            >
              My Reservations
            </Link>
            <Link to="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link to="/register">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
