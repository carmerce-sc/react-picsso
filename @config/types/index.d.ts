import { PicssoColorConfigType } from "./color";
import { PicssoMarginConfigType } from "./margin";
import { PicssoPaddingConfigType } from "./padding";
import { PicssoSizeConfigType } from "./size";
import { PicssoBorderConfigType } from "./border";
import { PicssoElementTypes, numStr } from "./common";

declare const picsso: PicssoElementTypes;
export default picsso;
declare module "react-picsso" {}
export interface PicssoDefaultConfigType
  extends PicssoMarginConfigType,
    PicssoPaddingConfigType,
    PicssoSizeConfigType,
    PicssoBorderConfigType,
    PicssoColorConfigType {
  /** justify-content: center; Involves "display: flex;". */
  jc?: boolean;
  /** align-items: center; Involves "display: flex;". */
  ac?: boolean;
  /** display: flex; */
  flex?: boolean;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  /** display: none; */
  none?: boolean;
  gap?: numStr;
  flexDirection?: string;
  column?: boolean;
  col?: boolean;
  row?: boolean;
  position?: string;
  ellipsis?: boolean;
  /** cursor: pointer; */
  pointer?: boolean;
  textAlign?: string;
  between?: boolean;
  fontSize?: numStr;
  /** Equals to font-size. */
  fs?: numStr;
  fontWeight?: numStr;
  /** Equals to font-weight. */
  fw?: numStr;
}

export { numStr } from "./common";

/**
 * The css function allows embedding and processing CSS within JavaScript/TypeScript using template literals.
 */
export function css(strings: TemplateStringsArray, ...values: string[]): string;

/**
 * e.g. number 2 -> string "2px"
 * @param value number or string
 */
export function toPixel(value: numStr): string;
