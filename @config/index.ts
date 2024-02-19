import { toPixel } from "../src/module/toPixel";
import { PicssoConfigKeyType, numStr } from "./types/common";
import PicssoBorderConfig from "../../react-picsso/@config/border";
import PicssoColorConfig from "../../react-picsso/@config/color";
import PicssoMarginConfig from "../../react-picsso/@config/margin";
import PicssoPaddingConfig from "../../react-picsso/@config/padding";
import PicssoSizeConfig from "../../react-picsso/@config/size";

const picssoDefaultConfig = {
  ...PicssoBorderConfig,
  ...PicssoColorConfig,
  ...PicssoMarginConfig,
  ...PicssoPaddingConfig,
  ...PicssoSizeConfig,

  jc: { getValue: () => "display:flex; justify-content:center;" },
  ac: { getValue: () => "display:flex; align-items:center;" },
  flex: { getValue: () => "display:flex;" },
  overflow: { getValue: (overflow: string) => `overflow:${overflow};` },
  overflowX: { getValue: (overflowX: string) => `overflow-x:${overflowX};` },
  overflowY: { getValue: (overflowY: string) => `overflow-y:${overflowY};` },
  none: { getValue: () => "display:none;" },
  gap: {
    getValue: (margin: numStr) => `display:flex; gap:${toPixel(margin)};`,
  },
  flexDirection: {
    getValue: (flexDirection: string) => `flex-direction:${flexDirection};`,
  },
  column: { getValue: () => "display:flex; flex-direction:column;" },
  col: { getValue: () => "display:flex; flex-direction:column;" },
  row: { getValue: () => "display:flex; flex-direction:row;" },
  position: { getValue: (position: string) => `position:${position};` },
  ellipsis: {
    getValue: () =>
      "text-overflow:ellipsis; overflow:hidden; white-space:nowrap;",
  },
  pointer: { getValue: () => "cursor: pointer;" },
  textAlign: { getValue: (textAlign: string) => `text-align:${textAlign};` },
  textCenter: { getValue: () => `text-align:center;` },
  textRight: { getValue: () => `text-align:right;` },
  textLeft: { getValue: () => `text-align:left;` },
  between: { getValue: () => "justify-content:space-between;" },
  fontSize: {
    getValue: (fontSize: string) => `font-size:${toPixel(fontSize)};`,
  },
  fs: {
    getValue: (fontSize: string) => `font-size:${toPixel(fontSize)};`,
  },
  fontWeight: {
    getValue: (fontWeight: string) => `font-weight:${fontWeight};`,
  },
  fw: {
    getValue: (fontWeight: string) => `font-weight:${fontWeight};`,
  },
  boxShadow: {
    getValue: (boxShadow: string) => `box-shadow:${boxShadow};`,
  },
  letterSpacing: {
    getValue: (letterSpacing: numStr) =>
      `letter-spacing:${toPixel(letterSpacing)};`,
  },
} as PicssoConfigKeyType;

export default picssoDefaultConfig;
