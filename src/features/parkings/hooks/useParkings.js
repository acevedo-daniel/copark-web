import { useQuery } from "@tanstack/react-query";
import { parkingService } from "../services/parking.service";

export const useParkings = () => {
  return useQuery({
    queryKey: ["parkings"],
    queryFn: parkingService.getAll,
    staleTime: 1000 * 60 * 5,
  });
};

export const useParking = (id) => {
  return useQuery({
    queryKey: ["parking", id],
    queryFn: () => parkingService.getById(id),
    enable: !!id,
  });
};
