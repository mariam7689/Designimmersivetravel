import { useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Loader2, CheckCircle } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { FormInput } from "./FormInput";
import { PasswordInput } from "./PasswordInput";
import { SocialLogin } from "./SocialLogin";
import { toast } from "sonner";

const countries = [
  "Egypt", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "Spain", "Italy", "United Arab Emirates",
  "Saudi Arabia", "Jordan", "Lebanon", "Morocco", "Tunisia"
];

export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    country: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
    if (!/[0-9]/.test(password)) return "Password must contain at least one number";
    return null;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (parseInt(formData.age) < 18) {
      newErrors.age = "You must be at least 18 years old";
    } else if (parseInt(formData.age) > 120) {
      newErrors.age = "Please enter a valid age";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    } else {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) {
        newErrors.dateOfBirth = "You must be at least 18 years old";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        newErrors.password = passwordError;
      }
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      toast.success("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <AuthLayout title="Success!" subtitle="Your account has been created">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center py-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-4">Welcome to Desertia!</h2>
          <p className="text-white/70 mb-6">
            Your account has been successfully created.
            <br />
            Redirecting you to login...
          </p>
          <div className="flex justify-center">
            <Loader2 className="w-6 h-6 text-[#D8B36A] animate-spin" />
          </div>
        </motion.div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Create Account" subtitle="Join thousands of desert explorers">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          placeholder="John Doe"
          required
          autoComplete="name"
        />

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

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            error={errors.age}
            placeholder="25"
            required
          />

          <div className="mb-6">
            <label htmlFor="country" className="block text-white/80 mb-2 font-medium">
              Country <span className="text-[#D8B36A]">*</span>
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border ${
                errors.country ? "border-red-400" : "border-white/20"
              } rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D8B36A] focus:border-transparent transition-all duration-300`}
            >
              <option value="" className="bg-[#1A2F3D]">Select country</option>
              {countries.map((country) => (
                <option key={country} value={country} className="bg-[#1A2F3D]">
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-red-400 text-sm flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.country}
              </motion.div>
            )}
          </div>
        </div>

        <FormInput
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          error={errors.dateOfBirth}
          required
        />

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Create a strong password"
          required
          showStrength
        />

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          placeholder="Confirm your password"
          required
        />

        <motion.button
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-gradient-to-r from-[#D8B36A] to-[#C17C54] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-5 h-5 animate-spin" />}
          {loading ? "Creating account..." : "Create Account"}
        </motion.button>

        <SocialLogin />

        <div className="text-center">
          <p className="text-white/60">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#D8B36A] hover:text-[#C17C54] font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
