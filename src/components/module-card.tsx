/** @jsxRuntime automatic */
import type { LucideIcon } from "lucide-react";
import { Card, CardIconTile, CardChevron } from "./card";
import { Badge } from "./badge";

/**
 * A module shown as a hub card. Active modules link to `href`; soon ones are not links.
 * The link is a plain `<a>`: each module is another zone, so navigation is a full page load.
 */
export type FarmModule = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
} & (
  | { status: "active"; href: string }
  | { status: "soon"; href?: string }
);

const MODULE_COLOR: Record<string, string> = {
  agua: "text-mod-agua",
  seguranca: "text-mod-seguranca",
  peixes: "text-mod-peixes",
  estufa: "text-mod-estufa",
  solar: "text-mod-solar",
  orquestrador: "text-mod-orquestrador",
};

export function ModuleCard({
  module,
  summary,
  summarySlot,
  alert = false,
}: {
  module: FarmModule;
  summary?: string;
  summarySlot?: React.ReactNode;
  alert?: boolean;
}) {
  const colorClass = MODULE_COLOR[module.id] ?? "text-texto-secundario";
  const Icon = module.icon;

  if (module.status === "soon") {
    return (
      <Card variant="soon">
        <div className="flex items-center gap-3">
          <CardIconTile icon={Icon} colorClass={colorClass} />
          <div className="flex-1 min-w-0">
            <p className="font-titulo font-semibold text-titulo-cartao">
              {module.name}
            </p>
          </div>
          <Badge status="false-positive" label="Em breve" />
        </div>
      </Card>
    );
  }

  const subtitleContent = summarySlot ?? (
    <span className={alert ? "text-erro" : ""}>
      {summary ?? module.description}
    </span>
  );

  return (
    <a href={module.href} className="block">
      <Card variant={alert ? "alert" : "default"}>
        <div className="flex items-center gap-3">
          <CardIconTile icon={Icon} colorClass={colorClass} />
          <div className="flex-1 min-w-0">
            <p className="font-titulo font-semibold text-titulo-cartao">
              {module.name}
            </p>
            <p className="text-legenda text-texto-secundario">
              {subtitleContent}
            </p>
          </div>
          <CardChevron />
        </div>
      </Card>
    </a>
  );
}
