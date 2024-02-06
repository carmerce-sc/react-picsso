import { numStr } from "./common";

export type PicssoSizeConfigType = {
  width?: numStr;
  /** Equals to width. */
  w?: numStr;
  height?: numStr;
  /** Equals to height. */
  h?: numStr;
  size?: numStr | [numStr | numStr];
  /** Apply 100% to width and height respectively. */
  fullP?: boolean;
  /** Apply 100vw and 100vh to width and height respectively. */
  fullV?: boolean;
  maxWidth?: numStr;
  maxHeight?: numStr;
  minWidth?: numStr;
  minHeight?: numStr;
};
