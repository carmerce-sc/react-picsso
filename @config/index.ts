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

  jc: () => "display:flex; justify-content:center;",
  ac: () => "display:flex; align-items:center;",
  flex: () => "display:flex;",
  overflow: (overflow: string) => `overflow:${overflow};`,
  overflowX: (overflowX: string) => `overflow-x:${overflowX};`,
  overflowY: (overflowY: string) => `overflow-y:${overflowY};`,
  none: () => "display:none;",
  gap: (margin: numStr) => `display:flex; gap:${toPixel(margin)};`,
  flexDirection: (flexDirection: string) => `flex-direction:${flexDirection};`,
  column: () => "display:flex; flex-direction:column;",
  col: () => "display:flex; flex-direction:column;",
  row: () => "display:flex; flex-direction:row;",
  position: (position: string) => `position:${position};`,
  ellipsis: () =>
    "text-overflow:ellipsis; overflow:hidden; white-space:nowrap;",
  pointer: () => "cursor: pointer;",
  textAlign: (textAlign: string) => `text-align:${textAlign};`,
  textCenter: () => `text-align:center;`,
  textRight: () => `text-align:right;`,
  textLeft: () => `text-align:left;`,
  between: () => "justify-content:space-between;",
  fontSize: (fontSize: string) => `font-size:${toPixel(fontSize)};`,
  fs: (fontSize: string) => `font-size:${toPixel(fontSize)};`,
  fontWeight: (fontWeight: string) => `font-weight:${fontWeight};`,
  fw: (fontWeight: string) => `font-weight:${fontWeight};`,
  boxShadow: (boxShadow: string) => `box-shadow:${boxShadow};`,
  letterSpacing: (letterSpacing: numStr) =>
    `letter-spacing:${toPixel(letterSpacing)};`,
} as PicssoConfigKeyType;

export default picssoDefaultConfig;
