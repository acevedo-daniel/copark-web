import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api";

export const useVehicles = () => {
  return useQuery({
    queryKey: ["my-vehicles"],
    queryFn: async () => {
      const { data } = await api.get("/vehicles");
      return data;
    },
  });
};
