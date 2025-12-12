import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { Button } from "../../../components/ui/Button";

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useRegister();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        navigate("/dashboard");
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-bg-surface p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-text-primary">
          Create Account
        </h2>
        {isError && (
          <div className="bg-bg-danger text-text-danger p-3 rounded mb-4 text-sm">
            {error?.response?.data?.message || "Error al registrarse"}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="mt-1 block w-full rounded-md border-border text-text-primary shadow-sm p-2 border bg-transparent"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border-border text-text-primary shadow-sm p-2 border bg-transparent"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* Teléfono */}
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              className="mt-1 block w-full rounded-md border-border text-text-primary shadow-sm p-2 border bg-transparent"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md border-border text-text-primary shadow-sm p-2 border bg-transparent"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Creating account..." : "Sign Up"}
          </Button>
          <div className="text-center mt-4">
            <Link
              to="/login"
              className="text-sm text-text-secondary hover:underline"
            >
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
