/** @jsxRuntime automatic */
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type CardVariant = "default" | "alert" | "soon";

export function Card({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
}) {
  const border =
    variant === "alert"
      ? "border-[1.5px] border-erro"
      : "border border-borda";

  const opacity = variant === "soon" ? "opacity-55" : "";

  return (
    <div
      className={`bg-superficie ${border} rounded-cartao p-4 ${className}`}
    >
      <div className={opacity}>{children}</div>
    </div>
  );
}

export function CardIconTile({
  icon: Icon,
  colorClass,
}: {
  icon: LucideIcon;
  colorClass: string;
}) {
  return (
    <div className="flex items-center justify-center w-10 h-10 border border-borda rounded-botao shrink-0">
      <Icon className={`w-5 h-5 ${colorClass}`} />
    </div>
  );
}

export function CardChevron() {
  return <ChevronRight className="w-5 h-5 text-texto-secundario shrink-0" />;
}
