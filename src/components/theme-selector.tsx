"use client";
/** @jsxRuntime automatic */

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY as STORAGE_KEY } from "../theme";

type ThemeChoice = "system" | "dark" | "light";

const OPTIONS: { value: ThemeChoice; label: string }[] = [
  { value: "system", label: "Celular" },
  { value: "light", label: "Claro" },
  { value: "dark", label: "Escuro" },
];

function readChoice(): ThemeChoice {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "dark" || v === "light") return v;
  } catch {
    // localStorage unavailable
  }
  return "system";
}

function apply(choice: ThemeChoice) {
  if (choice === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", choice);
  }
}

// External store for theme choice
const listeners = new Set<() => void>();
let snapshot: ThemeChoice = "system";

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot(): ThemeChoice {
  return snapshot;
}

function getServerSnapshot(): ThemeChoice {
  return "system";
}

function setTheme(next: ThemeChoice) {
  snapshot = next;
  apply(next);
  try {
    if (next === "system") {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, next);
    }
  } catch {
    // localStorage unavailable
  }
  for (const cb of listeners) cb();
}

// Initialize snapshot from localStorage on the client
if (typeof window !== "undefined") {
  snapshot = readChoice();
}

export function ThemeSelector() {
  const choice = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div
      role="radiogroup"
      aria-label="Tema"
      className="flex rounded-botao border border-borda bg-superficie"
    >
      {OPTIONS.map((opt) => {
        const active = choice === opt.value;
        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={active}
            onClick={() => setTheme(opt.value)}
            className={`
              flex-1 min-h-11 px-4 font-titulo font-semibold text-legenda
              transition-colors first:rounded-l-botao last:rounded-r-botao
              ${active ? "bg-acao text-acao-texto" : "text-texto-secundario"}
            `}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
