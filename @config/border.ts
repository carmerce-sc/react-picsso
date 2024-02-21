import { toPixel } from "../src/module/toPixel";
import { PicssoConfigKeyType, numStr } from "./types/common";

const border = {
  border: (border: string) => `border:${border};`,
  borderRadius: (borderRadius: numStr) =>
    `border-radius:${toPixel(borderRadius)};`,
  borderTop: (borderTop: numStr) => `border-top:${borderTop};`,
  bt: (borderTop: numStr) => `border-top:${borderTop};`,
  borderRight: (borderRight: numStr) => `border-right:${borderRight};`,
  br: (borderRight: numStr) => `border-right:${borderRight};`,
  borderBottom: (borderBottom: numStr) => `border-bottom:${borderBottom};`,
  bb: (borderBottom: numStr) => `border-bottom:${borderBottom};`,
  borderLeft: (borderLeft: numStr) => `border-left:${borderLeft};`,
  bl: (borderLeft: numStr) => `border-left:${borderLeft};`,
} as PicssoConfigKeyType;

export default border;
