import { motion } from "motion/react";
import { ChangeEvent, FocusEvent } from "react";

interface FormInputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  disabled = false,
  autoComplete,
  onBlur
}: FormInputProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-white/80 mb-2 font-medium">
        {label} {required && <span className="text-[#D8B36A]">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          className={`w-full px-4 py-3 bg-white/5 border ${
            error ? "border-red-400" : "border-white/20"
          } rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#D8B36A] focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
        />
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
    </div>
  );
}
