import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { MapPin, ArrowLeft, Loader2 } from "lucide-react";
import { useParking } from "../hooks/useParkings";
import { useAuth } from "../../auth/context/AuthContext";
import { bookingService } from "../../bookings/services/booking.service";
import { Button } from "../../../components/ui/Button";

import { useVehicles } from "../../vehicles/hooks/useVehicles";

export const ParkingDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { user, isAuthenticated } = useAuth();

  const {
    data: parking,
    isLoading: isLoadingParking,
    isError,
  } = useParking(id);

  const { data: vehicles, isLoading: isLoadingVehicles } = useVehicles();

  const bookingMutation = useMutation({
    mutationFn: bookingService.create,
    onSuccess: () => {
      navigate("/dashboard");
    },
  });

  const handleReserve = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: location } });
      return;
    }

    const vehicleId = vehicles && vehicles.length > 0 ? vehicles[0].id : null;

    const newBooking = {
      parkingId: parking.id,
      vehicleId: vehicleId,
      startTime: new Date().toISOString(),
      endTime: new Date(Date.now() + 3600000).toISOString(),
    };

    bookingMutation.mutate(newBooking);
  };

  if (isLoadingParking)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loader2 className="w-8 h-8 animate-spin text-(--color-primary)" />
      </div>
    );
  if (isError)
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <p className="text-text-danger text-lg mb-4">Parking not found.</p>
        <Button variant="outline" onClick={() => navigate("/explore")}>
          Go Back to Explore
        </Button>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="flex items-center text-text-secondary hover:text-text-primary mb-6 pl-0"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-bg-muted">
            <img
              src={parking.image}
              alt={parking.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            {parking.title}
          </h1>
          <div className="flex items-center text-text-secondary mb-4">
            <MapPin className="w-4 h-4 mr-1 text-text-primary" />{" "}
            {parking.address}
          </div>

          <div className="bg-bg-muted p-6 rounded-xl border border-border mt-8">
            <p className="text-sm text-text-secondary mb-4 text-center">
              {isAuthenticated
                ? "You are one click away from securing your spot."
                : "You must sign in to book."}
            </p>

            {bookingMutation.isError && (
              <div className="bg-bg-danger text-text-danger p-3 rounded mb-4 text-sm">
                {bookingMutation.error?.response?.data?.message || 
                 bookingMutation.error?.message || 
                 "Could not complete the reservation. Please try again."}
              </div>
            )}

            <Button
              onClick={handleReserve}
              disabled={bookingMutation.isPending}
              className="w-full h-12 text-lg shadow-lg"
            >
              {bookingMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                  Processing...
                </>
              ) : (
                "Book Now"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
