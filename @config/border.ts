import { toPixel } from "../module/toPixel";
import { PicssoConfigKeyType, numStr } from "./types/common";

export default {
  border: { getValue: (border: string) => `border:${border};` },
  borderRadius: {
    getValue: (borderRadius: numStr) =>
      `border-radius:${toPixel(borderRadius)};`,
  },
  borderTop: { getValue: (borderTop: numStr) => `border-top:${borderTop};` },
  bt: { getValue: (borderTop: numStr) => `border-top:${borderTop};` },
  borderRight: {
    getValue: (borderRight: numStr) => `border-right:${borderRight};`,
  },
  br: { getValue: (borderRight: numStr) => `border-right:${borderRight};` },
  borderBottom: {
    getValue: (borderBottom: numStr) => `border-bottom:${borderBottom};`,
  },
  bb: { getValue: (borderBottom: numStr) => `border-bottom:${borderBottom};` },
  borderLeft: {
    getValue: (borderLeft: numStr) => `border-left:${borderLeft};`,
  },
  bl: { getValue: (borderLeft: numStr) => `border-left:${borderLeft};` },
} as PicssoConfigKeyType;
