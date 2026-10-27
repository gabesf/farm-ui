/** @jsxRuntime automatic */
import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
}: {
  icon?: LucideIcon;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center gap-3">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-superficie">
        <Icon className="w-6 h-6 text-texto-secundario" />
      </div>
      <h2 className="font-titulo font-semibold text-titulo-cartao text-texto">
        {title}
      </h2>
      {description && (
        <p className="text-legenda text-texto-secundario max-w-xs">
          {description}
        </p>
      )}
    </div>
  );
}
