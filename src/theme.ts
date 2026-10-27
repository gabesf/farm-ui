/** localStorage key holding an explicit theme choice ("light" | "dark"); absent = follow the device. */
export const THEME_STORAGE_KEY = "sitio-tema";

/**
 * Inline script for <head>: applies a stored choice as `data-theme` before the
 * first paint, so there is no flash. Without a stored choice the CSS follows
 * `prefers-color-scheme`.
 */
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

/** Screen background (`--fundo`) per scheme, for the viewport `themeColor`. */
export const THEME_COLOR = { light: "#EAE4D6", dark: "#16120C" } as const;
