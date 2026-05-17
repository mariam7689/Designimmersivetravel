import { motion } from "motion/react";
import { Eye, EyeOff } from "lucide-react";
import { useState, ChangeEvent, FocusEvent } from "react";

interface PasswordInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  showStrength?: boolean;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export function PasswordInput({
  label,
  name,
  value,
  onChange,
  error,
  placeholder = "Enter your password",
  required = false,
  disabled = false,
  showStrength = false,
  onBlur
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: "", color: "" };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return { strength, label: "Weak", color: "bg-red-500" };
    if (strength <= 3) return { strength, label: "Fair", color: "bg-yellow-500" };
    if (strength <= 4) return { strength, label: "Good", color: "bg-blue-500" };
    return { strength, label: "Strong", color: "bg-green-500" };
  };

  const passwordStrength = showStrength ? getPasswordStrength(value) : null;

  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-white/80 mb-2 font-medium">
        {label} {required && <span className="text-[#D8B36A]">*</span>}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={name === "password" ? "current-password" : "new-password"}
          className={`w-full px-4 py-3 pr-12 bg-white/5 border ${
            error ? "border-red-400" : "border-white/20"
          } rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#D8B36A] focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          disabled={disabled}
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-6 left-0 text-red-400 text-sm flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </motion.div>
        )}
      </div>

      {showStrength && value && passwordStrength && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                className={`h-full ${passwordStrength.color} transition-all duration-300`}
              />
            </div>
            <span className="text-xs text-white/60">{passwordStrength.label}</span>
          </div>
          <div className="text-xs text-white/50 space-y-1">
            <div className={value.length >= 8 ? "text-green-400" : ""}>
              ✓ At least 8 characters
            </div>
            <div className={/[A-Z]/.test(value) ? "text-green-400" : ""}>
              ✓ One uppercase letter
            </div>
            <div className={/[0-9]/.test(value) ? "text-green-400" : ""}>
              ✓ One number
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
