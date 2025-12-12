import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query"; // <--- Importante
import {
  MapPin,
  Star,
  ArrowLeft,
  ShieldCheck,
  Car,
  Loader2,
} from "lucide-react";
import { useParking } from "../hooks/useParkings";
import { useAuth } from "../../auth/context/AuthContext";
import { bookingService } from "../../bookings/services/booking.service";
import { Button } from "../../../components/ui/Button";

export const ParkingDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Datos del usuario y Auth
  const { user, isAuthenticated } = useAuth();

  // 2. Datos de la cochera
  const {
    data: parking,
    isLoading: isLoadingParking,
    isError,
  } = useParking(id);

  // 3. La Mutación (La acción de reservar)
  const bookingMutation = useMutation({
    mutationFn: bookingService.create,
    onSuccess: () => {
      // Si sale bien, vamos al dashboard a ver la reserva
      navigate("/dashboard");
    },
    onError: (error) => {
      alert("Error al reservar: " + error.message);
    },
  });

  // 4. Click Handler
  const handleReserve = () => {
    if (!isAuthenticated) {
      // If not logged in, save location and redirect to login
      navigate("/login", { state: { from: location } });
      return;
    }

    // Booking Data (Simplified for MVP)
    const newBooking = {
      parkingId: parking.id,
      parkingTitle: parking.title,
      vehicleId: "veh-001", // Hardcoded for MVP
      userId: user.id,
      price: parking.pricePerHour,
      startTime: new Date().toISOString(),
      endTime: new Date(Date.now() + 3600000).toISOString(), // +1 hour
    };

    bookingMutation.mutate(newBooking);
  };

  if (isLoadingParking)
    return <div className="text-center py-20">Loading details...</div>;
  if (isError)
    return (
      <div className="text-center py-20 text-[var(--color-text-danger)]">
        Parking not found.
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] mb-6 pl-0"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="space-y-4">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-[var(--color-bg-muted)]">
            <img
              src={parking.image}
              alt={parking.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info and Action */}
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
            {parking.title}
          </h1>
          <div className="flex items-center text-[var(--color-text-secondary)] mb-4">
            <MapPin className="w-4 h-4 mr-1 text-[var(--color-text-primary)]" /> {parking.address}
          </div>

          <div className="bg-[var(--color-bg-muted)] p-6 rounded-xl border border-[var(--color-border)] mt-8">
            <p className="text-sm text-[var(--color-text-secondary)] mb-4 text-center">
              {isAuthenticated
                ? "You are one click away from securing your spot."
                : "You must sign in to book."}
            </p>

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
