import { useParkings } from "../hooks/useParkings";
import { ParkingCard } from "../components/ParkingCard";

export const ExplorePage = () => {
  const { data: parkings, isLoading, isError } = useParkings();

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-80 bg-bg-muted rounded-xl animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-text-danger text-lg mb-4">Error loading parkings.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-bg-surface border border-border rounded-md hover:bg-bg-muted transition-colors text-text-secondary"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary">Find your spot</h1>
        <p className="text-text-secondary mt-2">
          Explore the best parking options for your vehicle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {parkings.map((parking) => (
          <ParkingCard key={parking.id} parking={parking} />
        ))}
      </div>
    </div>
  );
};
