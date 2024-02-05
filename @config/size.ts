import { toPixel } from "../src/module/toPixel";
import { PicssoConfigKeyType, numStr } from "./types/common";

const size = {
  width: { getValue: (width: numStr) => `width:${toPixel(width)};` },
  w: { getValue: (width: numStr) => `width:${toPixel(width)};` },
  height: { getValue: (height: numStr) => `height:${toPixel(height)};` },
  h: { getValue: (height: numStr) => `height:${toPixel(height)};` },
  size: {
    getValue: (size: numStr) =>
      `width: ${
        Array.isArray(size) ? toPixel(size[0]) : toPixel(size)
      }; height: ${Array.isArray(size) ? toPixel(size[1]) : toPixel(size)};`,
  },
  fullP: { getValue: () => "width:100%; height:100%;" },
  fullV: { getValue: () => "width:100vw; height:100vh;" },
  maxWidth: { getValue: (maxWidth: numStr) => `max-width:${maxWidth};` },
  maxHeight: { getValue: (maxHeight: numStr) => `max-height:${maxHeight};` },
  minWidth: { getValue: (minWidth: numStr) => `min-width:${minWidth};` },
  minHeight: { getValue: (minWidth: numStr) => `min-height:${minWidth};` },
} as PicssoConfigKeyType;

export default size;
