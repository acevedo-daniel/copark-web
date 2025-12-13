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
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useRegister();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.phone && !/^\d{8,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number (8-15 digits)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    mutate(formData, {
      onSuccess: () => {
        navigate("/dashboard");
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-gray-100 to-gray-300">
      <div className="bg-bg-surface p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-text-primary">
          Create Account
        </h2>
        {isError && (
          <div className="bg-bg-danger text-text-danger p-3 rounded mb-4 text-sm">
            {error?.response?.data?.message || "Failed to create account"}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Name
            </label>
            <input
              name="name"
              type="text"
              className={`mt-1 block w-full rounded-md border text-text-primary shadow-sm p-2 bg-transparent ${
                errors.name ? "border-red-500" : "border-border"
              }`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-text-danger">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Email
            </label>
            <input
              name="email"
              type="email"
              className={`mt-1 block w-full rounded-md border text-text-primary shadow-sm p-2 bg-transparent ${
                errors.email ? "border-red-500" : "border-border"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-text-danger">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              className={`mt-1 block w-full rounded-md border text-text-primary shadow-sm p-2 bg-transparent ${
                errors.phone ? "border-red-500" : "border-border"
              }`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-text-danger">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary">
              Password
            </label>
            <input
              name="password"
              type="password"
              className={`mt-1 block w-full rounded-md border text-text-primary shadow-sm p-2 bg-transparent ${
                errors.password ? "border-red-500" : "border-border"
              }`}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-text-danger">{errors.password}</p>
            )}
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
