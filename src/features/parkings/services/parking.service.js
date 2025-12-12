import { MOCK_PARKINGS } from "./mockData";

export const delay = (ms) => new Promise((r) => setTimeout(r, ms));

export const parkingService = {
  getAll: async () => {
    await delay(1500);
    return MOCK_PARKINGS;
  },

  getById: async (id) => {
    await delay(1000);
    const parking = MOCK_PARKINGS.find((p) => p.id === id);
    if (!parking) throw new Error("Cochera no encontrada");
    return parking;
  },
};
