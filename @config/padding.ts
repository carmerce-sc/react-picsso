import { toPixel } from "../src/module/toPixel";
import { PicssoConfigKeyType, numStr } from "./types/common";

const padding = {
  padding: (padding: numStr) => `padding:${toPixel(padding)};`,
  p: (padding: numStr) => `padding:${toPixel(padding)};`,
  paddingX: (paddingX: numStr) =>
    `padding-left:${toPixel(paddingX)};padding-right:${toPixel(paddingX)};`,
  px: (paddingX: numStr) =>
    `padding-left:${toPixel(paddingX)};padding-right:${toPixel(paddingX)};`,
  paddingY: (paddingY: numStr) =>
    `padding-top:${toPixel(paddingY)};padding-bottom:${toPixel(paddingY)};`,
  py: (paddingY: numStr) =>
    `padding-top:${toPixel(paddingY)};padding-bottom:${toPixel(paddingY)};`,
  paddingTop: (paddingTop: numStr) => `padding-top:${toPixel(paddingTop)};`,
  pt: (paddingTop: numStr) => `padding-top:${toPixel(paddingTop)};`,
  paddingRight: (paddingRight: numStr) =>
    `padding-right:${toPixel(paddingRight)};`,
  pr: (paddingRight: numStr) => `padding-right:${toPixel(paddingRight)};`,
  paddingBottom: (paddingBottom: numStr) =>
    `padding-bottom:${toPixel(paddingBottom)};`,
  pb: (paddingBottom: numStr) => `padding-bottom:${toPixel(paddingBottom)};`,
  paddingLeft: (paddingLeft: numStr) => `padding-left:${toPixel(paddingLeft)};`,
  pl: (paddingLeft: numStr) => `padding-left:${toPixel(paddingLeft)};`,
} as PicssoConfigKeyType;

export default padding;
