import { numStr } from "./common";

export type PicssoSizeConfigType = {
  width?: numStr;
  w?: numStr;
  height?: numStr;
  h?: numStr;
  size?: numStr | [numStr | numStr];
  fullP?: boolean;
  fullV?: boolean;
  maxWidth?: numStr;
  maxHeight?: numStr;
  minWidth?: numStr;
  minHeight?: numStr;
};
