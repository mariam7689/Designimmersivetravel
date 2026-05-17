import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { FormInput } from "./FormInput";
import { toast } from "sonner";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      toast.error("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast.success("Password reset link sent!");
    }, 1500);
  };

  if (success) {
    return (
      <AuthLayout
        title="Check Your Email"
        subtitle="Password reset link sent successfully"
      >
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

          <h2 className="text-2xl font-bold text-white mb-4">Email Sent!</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            We've sent a password reset link to:
            <br />
            <span className="text-[#D8B36A] font-semibold">{email}</span>
            <br /><br />
            Please check your inbox and follow the instructions to reset your password.
          </p>

          <div className="space-y-4">
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#D8B36A] to-[#C17C54] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Login
            </Link>

            <button
              onClick={() => setSuccess(false)}
              className="w-full text-white/60 hover:text-white text-sm transition-colors"
            >
              Didn't receive the email? Try again
            </button>
          </div>
        </motion.div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to reset your password"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white/5 border border-white/20 rounded-xl p-4 mb-6">
          <p className="text-white/70 text-sm leading-relaxed">
            Enter the email address associated with your account and we'll send you a link to reset your password.
          </p>
        </div>

        <FormInput
          label="Email Address"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          error={error}
          placeholder="you@example.com"
          required
          autoComplete="email"
        />

        <motion.button
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-gradient-to-r from-[#D8B36A] to-[#C17C54] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-5 h-5 animate-spin" />}
          {loading ? "Sending..." : "Send Reset Link"}
        </motion.button>

        <div className="text-center space-y-4">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>

          <div className="pt-4 border-t border-white/10">
            <p className="text-white/60 text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#D8B36A] hover:text-[#C17C54] font-semibold transition-colors"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}
