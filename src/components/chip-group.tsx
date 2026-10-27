"use client";
/** @jsxRuntime automatic */

/**
 * Multi-select chip group (pills). Each chip is a toggle button.
 * Wraps in a fieldset with an accessible group label.
 */
export function ChipGroup({
  id,
  label,
  options,
  value,
  onChange,
  disabled = false,
}: {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  value: string[];
  onChange: (value: string[]) => void;
  disabled?: boolean;
}) {
  function toggle(optValue: string) {
    if (disabled) return;
    const next = value.includes(optValue)
      ? value.filter((v) => v !== optValue)
      : [...value, optValue];
    onChange(next);
  }

  return (
    <div>
      <span className="block font-titulo font-semibold text-legenda text-texto mb-1.5">
        {label}
      </span>
      <div id={id} role="group" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              aria-pressed={selected}
              onClick={() => toggle(opt.value)}
              disabled={disabled}
              className={`
                inline-flex items-center justify-center
                min-h-11 px-4 py-2 rounded-full
                font-titulo font-semibold text-legenda
                border transition-colors
                ${
                  selected
                    ? "border-texto bg-superficie text-texto"
                    : "border-borda bg-transparent text-texto-secundario"
                }
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
