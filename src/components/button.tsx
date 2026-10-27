/** @jsxRuntime automatic */
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "destructive" | "destructive-outline";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-acao text-acao-texto active:opacity-85",
  secondary: "border-[1.5px] border-borda text-texto bg-transparent",
  destructive: "bg-erro text-erro-texto active:opacity-85",
  "destructive-outline": "border-[1.5px] border-erro text-erro bg-transparent",
};

export function Button({
  variant = "primary",
  label,
  icon: Icon,
  disabled = false,
  disabledHint,
  fullWidth = false,
  type = "button",
  href,
  external = false,
  onClick,
}: {
  variant?: ButtonVariant;
  label: string;
  icon?: LucideIcon;
  disabled?: boolean;
  disabledHint?: string;
  fullWidth?: boolean;
  type?: "button" | "submit";
  /** When provided the button renders as a `next/link` (or a plain `<a>` with `external`). */
  href?: string;
  /** With `href`, render a plain `<a target="_blank" rel="noopener noreferrer">` instead of next/link. */
  external?: boolean;
  onClick?: () => void;
}) {
  const classes = `
    inline-flex items-center justify-center gap-2
    h-12 rounded-botao font-titulo font-semibold text-corpo
    min-w-11 px-4 transition-opacity
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "bg-desabilitado text-desabilitado-texto cursor-not-allowed" : VARIANT_CLASSES[variant]}
  `;

  // External link variant — renders a plain <a> for external URLs.
  if (href && external && !disabled) {
    return (
      <div className={fullWidth ? "w-full" : ""}>
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {Icon && <Icon className="w-5 h-5" />}
          {label}
        </a>
      </div>
    );
  }

  // Link variant — renders as <a> via next/link for client-side navigation.
  if (href && !disabled) {
    return (
      <div className={fullWidth ? "w-full" : ""}>
        <Link href={href} className={classes}>
          {Icon && <Icon className="w-5 h-5" />}
          {label}
        </Link>
      </div>
    );
  }

  return (
    <div className={fullWidth ? "w-full" : ""}>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={classes}
      >
        {Icon && <Icon className="w-5 h-5" />}
        {label}
      </button>
      {disabled && disabledHint && (
        <p className="text-legenda text-texto-secundario mt-1.5">{disabledHint}</p>
      )}
    </div>
  );
}
