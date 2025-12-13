import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { Button } from "../../../components/ui/Button";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useLogin();

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

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
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-gray-100 to-gray-300">
      <div className="bg-bg-surface p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-text-primary">
          Sign In
        </h2>

        {isError && (
          <div className="bg-bg-danger text-text-danger p-3 rounded mb-4 text-sm">
            {error?.response?.data?.message || "Failed to sign in"}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Email
            </label>
            <input
              type="email"
              className={`mt-1 block w-full rounded-md border text-text-primary shadow-sm p-2 bg-transparent ${
                errors.email ? "border-red-500" : "border-border"
              }`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              placeholder="demo@copark.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-text-danger">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Password
            </label>
            <input
              type="password"
              className={`mt-1 block w-full rounded-md border text-text-primary shadow-sm p-2 bg-transparent ${
                errors.password ? "border-red-500" : "border-border"
              }`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: "" });
              }}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-text-danger">{errors.password}</p>
            )}
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
