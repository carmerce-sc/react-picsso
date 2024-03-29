import { toPixel } from "../src/module/toPixel";
import { PicssoConfigKeyType, numStr } from "./types/common";

const padding = {
  padding: { getValue: (padding: numStr) => `padding:${toPixel(padding)};` },
  p: { getValue: (padding: numStr) => `padding:${toPixel(padding)};` },
  paddingX: {
    getValue: (paddingX: numStr) =>
      `padding-left:${toPixel(paddingX)};padding-right:${toPixel(paddingX)};`,
  },
  px: {
    getValue: (paddingX: numStr) =>
      `padding-left:${toPixel(paddingX)};padding-right:${toPixel(paddingX)};`,
  },
  paddingY: {
    getValue: (paddingY: numStr) =>
      `padding-top:${toPixel(paddingY)};padding-bottom:${toPixel(paddingY)};`,
  },
  py: {
    getValue: (paddingY: numStr) =>
      `padding-top:${toPixel(paddingY)};padding-bottom:${toPixel(paddingY)};`,
  },
  paddingTop: {
    getValue: (paddingTop: numStr) => `padding-top:${toPixel(paddingTop)};`,
  },
  pt: {
    getValue: (paddingTop: numStr) => `padding-top:${toPixel(paddingTop)};`,
  },
  paddingRight: {
    getValue: (paddingRight: numStr) =>
      `padding-right:${toPixel(paddingRight)};`,
  },
  pr: {
    getValue: (paddingRight: numStr) =>
      `padding-right:${toPixel(paddingRight)};`,
  },
  paddingBottom: {
    getValue: (paddingBottom: numStr) =>
      `padding-bottom:${toPixel(paddingBottom)};`,
  },
  pb: {
    getValue: (paddingBottom: numStr) =>
      `padding-bottom:${toPixel(paddingBottom)};`,
  },
  paddingLeft: {
    getValue: (paddingLeft: numStr) => `padding-left:${toPixel(paddingLeft)};`,
  },
  pl: {
    getValue: (paddingLeft: numStr) => `padding-left:${toPixel(paddingLeft)};`,
  },
} as PicssoConfigKeyType;

export default padding;
