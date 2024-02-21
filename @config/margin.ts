import { PicssoConfigKeyType, numStr } from "./types/common";
import { toPixel } from "../src/module/toPixel";
const margin = {
  margin: (margin: numStr) => `margin:${toPixel(margin)};`,
  m: (margin: numStr) => `margin:${toPixel(margin)};`,
  marginX: (marginX: numStr) =>
    `margin-left:${toPixel(marginX)};margin-right:${toPixel(marginX)};`,
  mx: (marginX: numStr) =>
    `margin-left:${toPixel(marginX)};margin-right:${toPixel(marginX)};`,
  marginY: (marginY: numStr) =>
    `margin-top:${toPixel(marginY)};margin-bottom:${toPixel(marginY)};`,
  my: (marginY: numStr) =>
    `margin-top:${toPixel(marginY)};margin-bottom:${toPixel(marginY)};`,
  marginTop: (marginTop: numStr) => `margin-top:${toPixel(marginTop)};`,
  mt: (marginTop: numStr) => `margin-top:${toPixel(marginTop)};`,
  marginRight: (marginRight: numStr) => `margin-right:${toPixel(marginRight)};`,
  mr: (marginRight: numStr) => `margin-right:${toPixel(marginRight)};`,
  marginBottom: (marginBottom: numStr) =>
    `margin-bottom:${toPixel(marginBottom)};`,
  mb: (marginBottom: numStr) => `margin-bottom:${toPixel(marginBottom)};`,
  marginLeft: (marginLeft: numStr) => `margin-left:${toPixel(marginLeft)};`,
} as PicssoConfigKeyType;

export default margin;
