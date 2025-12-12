import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { Button } from "../../../components/ui/Button";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate("/dashboard");
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-bg-surface p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-text-primary">
          Sign In
        </h2>

        {isError && (
          <div className="bg-bg-danger text-text-danger p-3 rounded mb-4 text-sm">
            {error?.response?.data?.message || "Error al iniciar sesión"}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-border text-text-primary shadow-sm p-2 border bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="demo@copark.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-border text-text-primary shadow-sm p-2 border bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Logging in..." : "Log In"}
          </Button>

          <div className="text-center mt-4">
            <Link
              to="/register"
              className="text-sm text-text-secondary hover:underline"
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
