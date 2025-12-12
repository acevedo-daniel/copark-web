import { useParkings } from "../hooks/useParkings";
import { ParkingCard } from "../components/ParkingCard";

export const ExplorePage = () => {
  const { data: parkings, isLoading, isError } = useParkings();

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skeleton Loading */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-80 bg-[var(--color-bg-muted)] rounded-xl animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-12 text-[var(--color-text-danger)]">
        Error loading parkings. Please try again.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
          Find your spot
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-2">
          Explore the best parking options for your vehicle.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {parkings.map((parking) => (
          <ParkingCard key={parking.id} parking={parking} />
        ))}
      </div>
    </div>
  );
};
