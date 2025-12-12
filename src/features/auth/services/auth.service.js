import { api } from "../../../lib/api.js";

export const authService = {
  login: async (credentials) => {
    const { data } = await api.post("/auth/login", credentials);
    return data;
  },

  register: async (userData) => {
    const { data } = await api.post("/auth/register", userData);
    return data;
  },

  me: async () => {
    const { data } = await api.get("/users/me");
    return data;
  },
};
