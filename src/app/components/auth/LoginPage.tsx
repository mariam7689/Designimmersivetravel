import { useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { FormInput } from "./FormInput";
import { PasswordInput } from "./PasswordInput";
import { SocialLogin } from "./SocialLogin";
import { toast } from "sonner";

export function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors: { email?: string; password?: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (formData.email === "demo@desertia.com" && formData.password === "Demo123") {
        toast.success("Welcome back to Desertia!");
        navigate("/");
      } else {
        setErrors({ password: "Incorrect email or password" });
        toast.error("Incorrect email or password");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to your Desertia account">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="you@example.com"
          required
          autoComplete="email"
        />

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Enter your password"
          required
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#D8B36A] focus:ring-[#D8B36A] focus:ring-offset-0"
            />
            <span className="text-white/70 text-sm">Remember me</span>
          </label>

          <Link
            to="/forgot-password"
            className="text-[#D8B36A] hover:text-[#C17C54] text-sm transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        <motion.button
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-gradient-to-r from-[#D8B36A] to-[#C17C54] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-5 h-5 animate-spin" />}
          {loading ? "Signing in..." : "Sign In"}
        </motion.button>

        <SocialLogin />

        <div className="text-center">
          <p className="text-white/60">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#D8B36A] hover:text-[#C17C54] font-semibold transition-colors"
            >
              Create account
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
