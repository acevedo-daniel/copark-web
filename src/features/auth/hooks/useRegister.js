import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

export const useRegister = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => {
      login(data);
    },
  });
};
