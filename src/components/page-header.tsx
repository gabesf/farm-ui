/** @jsxRuntime automatic */
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function PageHeader({
  title,
  context,
  backHref,
  action,
}: {
  title: string;
  context?: React.ReactNode;
  backHref?: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="px-5 pt-4 pb-0">
      <div className="flex items-start gap-1">
        {backHref && (
          <Link
            href={backHref}
            className="flex items-center justify-center w-11 h-11 -ml-2 shrink-0"
            aria-label="Voltar"
          >
            <ChevronLeft className="w-6 h-6 text-texto" />
          </Link>
        )}
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <h1 className="font-titulo font-bold text-titulo-pagina text-texto">
            {title}
          </h1>
          {context && (
            <p className="text-legenda text-texto-secundario">{context}</p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </header>
  );
}
