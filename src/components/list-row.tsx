/** @jsxRuntime automatic */
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ListRow({
  thumbnail,
  title,
  subtitle,
  right,
  href,
}: {
  thumbnail?: React.ReactNode;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <>
      {thumbnail && (
        <div className="w-14 h-[42px] rounded-mini shrink-0 overflow-hidden bg-fundo">
          {thumbnail}
        </div>
      )}
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <p className="font-titulo font-semibold text-corpo text-texto truncate">
          {title}
        </p>
        {subtitle && (
          <p className="text-legenda text-texto-secundario truncate">
            {subtitle}
          </p>
        )}
      </div>
      {right && <div className="flex items-center gap-2 shrink-0">{right}</div>}
    </>
  );

  const cls = "flex items-center gap-3 px-4 py-3 min-h-16";

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return <div className={cls}>{inner}</div>;
}

export function ListRowChevron() {
  return <ChevronRight className="w-5 h-5 text-texto-secundario" />;
}

export function ListRowSeparator() {
  return <div className="h-px bg-borda mx-4" />;
}
