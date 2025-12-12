import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

export const useLogin = () => {
  const { login: loginToContext } = useAuth();

  return useMutation({
    mutationFn: authService.login,

    onSuccess: (data) => {
      loginToContext(data);


    },

    onError: (error) => {
      console.error("error en login:", error.message);
    },
  });
};
