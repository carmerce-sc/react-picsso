import { numStr } from "../../types";

type PicssoSizeConfigType = {
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

export default PicssoSizeConfigType;
