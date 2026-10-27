// Minimal ambient types for the `qrcode` package (no bundled types, and
// @types/qrcode is not a dependency). Only the surface used in the app is typed.
// Used by: src/pages/games/ctf.astro
declare module 'qrcode' {
  interface QRCodeToCanvasOptions {
    width?: number;
    margin?: number;
    color?: { dark?: string; light?: string };
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  }

  interface QRCodeToDataURLOptions extends QRCodeToCanvasOptions {
    type?: 'image/png' | 'image/jpeg' | 'image/webp';
  }

  function toCanvas(
    canvas: HTMLCanvasElement,
    text: string,
    options?: QRCodeToCanvasOptions,
  ): Promise<HTMLCanvasElement>;

  function toDataURL(text: string, options?: QRCodeToDataURLOptions): Promise<string>;

  function toString(
    text: string,
    options?: { type?: 'svg' | 'utf8' | 'terminal' },
  ): Promise<string>;

  const QRCode: {
    toCanvas: typeof toCanvas;
    toDataURL: typeof toDataURL;
    toString: typeof toString;
  };

  export { toCanvas, toDataURL, toString };
  export default QRCode;
}
