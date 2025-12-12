import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-4 text-[var(--color-text-primary)]">CoPark</h1>
      <p className="text-xl mb-8 text-[var(--color-text-secondary)]">Parking made easy.</p>
      <div className="space-x-4">
        <Link
          to="/dashboard"
          className="px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] font-semibold hover:brightness-95 rounded-md"
        >
          DASHBOARD
        </Link>
      </div>
    </div>
  );
};
