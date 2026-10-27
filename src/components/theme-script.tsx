/** @jsxRuntime automatic */
import { THEME_SCRIPT } from "../theme";

/** Render inside <head> of the root layout (with `suppressHydrationWarning` on <html>). */
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
