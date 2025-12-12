import { api } from "../../../lib/api.js";

export const parkingService = {
  getAll: async () => {
    const { data } = await api.get("/parkings");
    return data;
  },

  getById: async (id) => {
    const { data } = await api.get(`/parkings/${id}`);
    return data;
  },
};
