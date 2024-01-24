import { toPixel } from "../../react-picsso/module/toPixel";
import { PicssoConfigKeyType, numStr } from "../../react-picsso/types.d";
import PicssoBorderConfig, {
  PicssoBorderConfigType,
} from "../../react-picsso/@config/border";
import PicssoColorConfig, {
  PicssoColorConfigType,
} from "../../react-picsso/@config/color";
import PicssoMarginConfig, {
  PicssoMarginConfigType,
} from "../../react-picsso/@config/margin";
import PicssoPaddingConfig, {
  PicssoPaddingConfigType,
} from "../../react-picsso/@config/padding";
import PicssoSizeConfig, {
  PicssoSizeConfigType,
} from "../../react-picsso/@config/size";

const picssoDefaultConfig = {
  ...PicssoBorderConfig,
  ...PicssoColorConfig,
  ...PicssoMarginConfig,
  ...PicssoPaddingConfig,
  ...PicssoSizeConfig,

  jc: { getValue: () => "display:flex; justify-content:center;" },
  ac: { getValue: () => "display:flex; align-items:center;" },
  flex: { getValue: () => "display:flex;" },
  overflow: { getValue: (overflow: string) => `overflow:${overflow};` },
  overflowX: { getValue: (overflowX: string) => `overflow-x:${overflowX};` },
  overflowY: { getValue: (overflowY: string) => `overflow-y:${overflowY};` },
  none: { getValue: () => "display:none;" },
  gap: { getValue: (margin: numStr) => `gap:${toPixel(margin)};` },
  flexDirection: {
    getValue: (flexDirection: string) => `flex-direction:${flexDirection};`,
  },
  column: { getValue: () => "flex-direction:column;" },
  col: { getValue: () => "flex-direction:column;" },
  row: { getValue: () => "flex-direction:row;" },
  position: { getValue: (position: string) => `position:${position};` },
  ellipsis: {
    getValue: () =>
      "text-overflow:ellipsis; overflow:hidden; white-space:nowrap;",
  },
  pointer: { getValue: () => "cursor: pointer;" },
  textAlign: { getValue: (textAlign: string) => `text-align:${textAlign};` },
  between: { getValue: () => "justify-content:space-between;" },
  fontSize: {
    getValue: (fontSize: string) => `font-size:${toPixel(fontSize)};`,
  },
  fs: {
    getValue: (fontSize: string) => `font-size:${toPixel(fontSize)};`,
  },
  fontWeight: {
    getValue: (fontWeight: string) => `font-weight:${fontWeight};`,
  },
  fw: {
    getValue: (fontWeight: string) => `font-weight:${fontWeight};`,
  },
} as PicssoConfigKeyType;

export default picssoDefaultConfig;

export interface PicssoDefaultConfigType
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
