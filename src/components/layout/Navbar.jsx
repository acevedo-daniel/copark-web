import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { useAuth } from "../../features/auth/context/AuthContext";

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-bg-surface sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-text-primary">
            CoPark
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/parkings"
              className="text-text-secondary hover:text-text-primary font-medium"
            >
              Explore
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/dashboard"
                  className="text-text-secondary hover:text-text-primary font-medium"
                >
                  Reservations
                </Link>
                <div className="flex items-center gap-3 pl-4 border-l border-border">
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-semibold text-text-primary leading-none">
                      {user?.name || "User"}
                    </span>
                    <span className="text-xs text-text-secondary">
                      {user?.email}
                    </span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-(--color-primary) text-white flex items-center justify-center font-bold">
                    {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={logout}
                    className="ml-2 text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    Log out
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary hover:text-text-secondary focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-surface border-b border-border shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link
              to="/parkings"
              className="block text-text-secondary hover:text-text-primary font-medium text-lg py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="block text-text-secondary hover:text-text-primary font-medium text-lg py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reservations
                </Link>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-(--color-primary) text-white flex items-center justify-center font-bold text-lg">
                      {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">
                        {user?.name}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {user?.email}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full justify-start text-red-500 hover:bg-red-50 pl-0"
                  >
                    Log out
                  </Button>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
