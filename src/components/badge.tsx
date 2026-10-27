/** @jsxRuntime automatic */
type BadgeStatus = "online" | "offline" | "in-progress" | "false-positive";

const STATUS_COLOR: Record<BadgeStatus, string> = {
  online: "text-ok",
  offline: "text-erro",
  "in-progress": "text-aviso",
  "false-positive": "text-texto-secundario",
};

const STATUS_DOT_BG: Record<BadgeStatus, string> = {
  online: "bg-ok",
  offline: "bg-erro",
  "in-progress": "bg-aviso",
  "false-positive": "bg-texto-secundario",
};

export function Badge({
  status,
  label,
}: {
  status: BadgeStatus;
  label: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 border border-borda rounded-full
        font-titulo font-semibold text-overline uppercase tracking-[.06em]
        h-6 ${STATUS_COLOR[status]}`}
    >
      <span
        className={`w-2 h-2 rounded-full shrink-0 ${STATUS_DOT_BG[status]}`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
