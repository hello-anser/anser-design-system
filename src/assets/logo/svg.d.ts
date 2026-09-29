/* The build inlines each supplied logo file as base64 (esbuild's `base64`
   loader, scripts/build.mjs); Wordmark wraps it as a data URL. */
declare module '*.svg' {
  const base64: string;
  export default base64;
}
