"use client";
/** @jsxRuntime automatic */

import { AlertTriangle } from "lucide-react";
import { Button } from "./button";

export function ErrorState({
  message,
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center gap-3">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-superficie">
        <AlertTriangle className="w-6 h-6 text-erro" />
      </div>
      <h2 className="font-titulo font-semibold text-titulo-cartao text-texto">
        Não foi possível carregar
      </h2>
      {message && (
        <p className="text-legenda text-texto-secundario max-w-xs">{message}</p>
      )}
      {onRetry && (
        <Button variant="secondary" label="Tentar de novo" onClick={onRetry} />
      )}
    </div>
  );
}
