"use client";
/** @jsxRuntime automatic */

import { ChevronDown, Clock } from "lucide-react";

/* ── Label ── */
function FieldLabel({
  htmlFor,
  children,
  srOnly = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  srOnly?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={
        srOnly
          ? "sr-only"
          : "block font-titulo font-semibold text-legenda text-texto mb-1.5"
      }
    >
      {children}
    </label>
  );
}

/* ── Error message ── */
function FieldError({ message }: { message: string }) {
  return <p className="text-legenda text-erro mt-1">{message}</p>;
}

/* ── Input ── */
export function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  required = false,
  autoComplete,
  name,
}: {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  name?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <input
        id={id}
        name={name ?? id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
        className={`
          w-full h-12 rounded-botao bg-superficie
          border-[1.5px] ${error ? "border-erro" : "border-borda"} focus:border-texto
          px-3.5 text-corpo text-texto
          placeholder:text-texto-secundario
          outline-none transition-colors
          disabled:bg-desabilitado disabled:text-desabilitado-texto disabled:cursor-not-allowed
        `}
      />
      {error && <FieldError message={error} />}
    </div>
  );
}

/* ── Select ── */
export function Select({
  id,
  label,
  value,
  onChange,
  options,
  disabled = false,
  hideLabel = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  disabled?: boolean;
  hideLabel?: boolean;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id} srOnly={hideLabel}>{label}</FieldLabel>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`
            w-full h-12 rounded-botao bg-superficie
            border-[1.5px] border-borda focus:border-texto
            px-3.5 pr-10 text-corpo text-texto
            appearance-none outline-none transition-colors
            disabled:bg-desabilitado disabled:text-desabilitado-texto disabled:cursor-not-allowed
          `}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-texto-secundario pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* ── Toggle ── */
export function Toggle({
  id,
  label,
  checked,
  onChange,
  disabled = false,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center justify-between min-h-11">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className={`
          relative w-[52px] h-[30px] rounded-full transition-colors shrink-0
          ${checked ? "bg-ok" : "bg-borda"}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        <span
          className={`
            absolute top-[2px] w-[26px] h-[26px] rounded-full bg-superficie
            shadow-sm transition-transform
            ${checked ? "left-[24px]" : "left-[2px]"}
          `}
        />
      </button>
    </div>
  );
}

/* ── Time field (opens native picker) ── */
export function TimeField({
  id,
  label,
  value,
  onChange,
  disabled = false,
}: {
  id: string;
  label: string;
  value: string; // "HH:mm"
  onChange: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <div className="relative">
        <input
          id={id}
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`
            w-full h-12 rounded-botao bg-superficie
            border-[1.5px] border-borda focus:border-texto
            px-3.5 pr-10 text-corpo text-texto font-titulo font-semibold
            outline-none transition-colors
            disabled:bg-desabilitado disabled:text-desabilitado-texto disabled:cursor-not-allowed
          `}
        />
        <Clock
          className="absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-texto-secundario pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
