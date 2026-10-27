/** @jsxRuntime automatic */
import { ChevronLeft } from "lucide-react";

/**
 * "Sítio" link back to the hub, for a zone's header. A plain `<a>` (not
 * `next/link`): the hub is another zone, so this is a full page load.
 */
export function HubLink() {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-1 min-h-11 min-w-11 -ml-2 pr-2 font-titulo font-semibold text-texto"
    >
      <ChevronLeft className="w-6 h-6 shrink-0" aria-hidden="true" />
      <span>Sítio</span>
    </a>
  );
}
