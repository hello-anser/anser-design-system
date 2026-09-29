/* The build inlines each supplied logo file as a data URL (esbuild's
   `dataurl` loader, scripts/build.mjs), so importing one yields its src. */
declare module '*.svg' {
  const src: string;
  export default src;
}
