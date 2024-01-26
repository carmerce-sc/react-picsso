import { PicssoColorConfigType } from "./color";
import { PicssoMarginConfigType } from "./margin";
import { PicssoPaddingConfigType } from "./padding";
import { PicssoSizeConfigType } from "./size";
import { PicssoBorderConfigType } from "./border";
import { numStr } from "./common";

declare interface PicssoDefaultConfigType
  extends PicssoMarginConfigType,
    PicssoPaddingConfigType,
    PicssoSizeConfigType,
    PicssoBorderConfigType,
    PicssoColorConfigType {
  jc?: boolean;
  ac?: boolean;
  flex?: boolean;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  none?: boolean;
  gap?: numStr;
  flexDirection?: string;
  column?: boolean;
  col?: boolean;
  row?: boolean;
  position?: string;
  ellipsis?: boolean;
  pointer?: boolean;
  textAlign?: string;
  between?: boolean;
  fontSize?: numStr;
  fs?: numStr;
  fontWeight?: numStr;
  fw?: numStr;
}

export default PicssoDefaultConfigType;
