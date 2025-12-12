import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./app/routes/AppRouter";
import { AuthProvider } from "./features/auth/context/AuthContext";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {" "}
        {}
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
};
