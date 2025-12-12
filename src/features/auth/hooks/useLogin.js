import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

export const useLogin = () => {
  const { login: loginToContext } = useAuth();

  return useMutation({
    mutationFn: authService.login,

    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      const userToStore = data.user || data;
      loginToContext(userToStore);


    },

    onError: (error) => {
      console.error("error en login:", error.message);
    },
  });
};
