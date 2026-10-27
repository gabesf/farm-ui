/** @jsxRuntime automatic */
/** Skeleton placeholders for loading states. Uses the custom skeleton-pulse animation. */

export function SkeletonBlock({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`bg-borda rounded-mini animate-skeleton ${className}`}
      aria-hidden="true"
    />
  );
}

/** A skeleton that mimics a ListRow: thumbnail + two text lines */
export function SkeletonListRow() {
  return (
    <div className="flex items-center gap-3 px-4 py-3 min-h-16" aria-hidden="true">
      <SkeletonBlock className="w-14 h-[42px] shrink-0" />
      <div className="flex flex-col gap-2 flex-1">
        <SkeletonBlock className="h-3.5 w-3/4" />
        <SkeletonBlock className="h-3 w-1/2" />
      </div>
    </div>
  );
}

/** A skeleton that mimics a Card */
export function SkeletonCard() {
  return (
    <div
      className="bg-superficie border border-borda rounded-cartao p-4"
      aria-hidden="true"
    >
      <div className="flex items-center gap-3">
        <SkeletonBlock className="w-10 h-10 rounded-botao" />
        <div className="flex flex-col gap-2 flex-1">
          <SkeletonBlock className="h-3.5 w-2/3" />
          <SkeletonBlock className="h-3 w-1/3" />
        </div>
      </div>
    </div>
  );
}
