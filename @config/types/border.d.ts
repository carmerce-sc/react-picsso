import { numStr } from "./common";

export type PicssoBorderConfigType = {
  border?: string;
  borderRadius?: numStr;
  borderTop?: string;
  /** Equals to border-top. */
  bt?: string;
  borderRight?: string;
  /** Equals to border-right. */
  br?: string;
  borderBottom?: string;
  /** Equals to border-bottom. */
  bb?: string;
  borderLeft?: string;
  /** Equals to border-left. */
  bl?: string;
};
