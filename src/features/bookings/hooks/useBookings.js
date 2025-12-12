import { useQuery } from "@tanstack/react-query";
import { bookingService } from "../services/booking.service";

export function useBookings() {
  return useQuery({
    queryKey: ["my-bookings"],
    queryFn: bookingService.getMyBookings,
  });
}
