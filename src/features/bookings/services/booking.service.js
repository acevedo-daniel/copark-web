import { api } from "../../../lib/api.js";

export const bookingService = {
  getMyBookings: async () => {
    const { data } = await api.get("/bookings");
    return data;
  },

  create: async (bookingData) => {
    const { data } = await api.post("/bookings", bookingData);
    return data;
  },
};
