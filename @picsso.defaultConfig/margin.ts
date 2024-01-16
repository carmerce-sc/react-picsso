import { PicssoConfigKeyType, numStr } from "../types.d";
import { toPixel } from "../module/toPixel";

export default {
  margin: { getValue: (margin: numStr) => `margin:${toPixel(margin)};` },
  m: { getValue: (margin: numStr) => `margin:${toPixel(margin)};` },
  marginX: {
    getValue: (marginX: numStr) =>
      `margin-left:${toPixel(marginX)};margin-right:${toPixel(marginX)};`,
  },
  mx: {
    getValue: (marginX: numStr) =>
      `margin-left:${toPixel(marginX)};margin-right:${toPixel(marginX)};`,
  },
  marginY: {
    getValue: (marginY: numStr) =>
      `margin-top:${toPixel(marginY)};margin-bottom:${toPixel(marginY)};`,
  },
  my: {
    getValue: (marginY: numStr) =>
      `margin-top:${toPixel(marginY)};margin-bottom:${toPixel(marginY)};`,
  },
  marginTop: {
    getValue: (marginTop: numStr) => `margin-top:${toPixel(marginTop)};`,
  },
  mt: { getValue: (marginTop: numStr) => `margin-top:${toPixel(marginTop)};` },
  marginRight: {
    getValue: (marginRight: numStr) => `margin-right:${toPixel(marginRight)};`,
  },
  mr: {
    getValue: (marginRight: numStr) => `margin-right:${toPixel(marginRight)};`,
  },
  marginBottom: {
    getValue: (marginBottom: numStr) =>
      `margin-bottom:${toPixel(marginBottom)};`,
  },
  mb: {
    getValue: (marginBottom: numStr) =>
      `margin-bottom:${toPixel(marginBottom)};`,
  },
  marginLeft: {
    getValue: (marginLeft: numStr) => `margin-left:${toPixel(marginLeft)};`,
  },
  ml: {
    getValue: (marginLeft: numStr) => `margin-left:${toPixel(marginLeft)};`,
  },
} as PicssoConfigKeyType;

export type PicssoMarginConfigType = {
  margin?: numStr;
  m?: numStr;
  marginX?: numStr;
  mx?: numStr;
  marginY?: numStr;
  my?: numStr;
  marginTop?: numStr;
  mt?: numStr;
  marginRight?: numStr;
  mr?: numStr;
  marginBottom?: numStr;
  mb?: numStr;
  marginLeft?: numStr;
  ml?: numStr;
};