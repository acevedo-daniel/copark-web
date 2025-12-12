import { useQuery } from "@tanstack/react-query";
import { bookingService } from "../services/booking.service";
import { useAuth } from "../../auth/context/AuthContext";

export function useBookings() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["my-bookings", user?.id],
    queryFn: bookingService.getMyBookings,
    enabled: !!user?.id,
  });
}
