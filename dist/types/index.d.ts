type PicssoColorConfigType = {
  background?: string;
  backgroundColor?: string;
  bg?: string;
  color?: string;
};

declare type numStr = number | string;

type PicssoMarginConfigType = {
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

type PicssoPaddingConfigType = {
  padding?: numStr;
  p?: numStr;
  paddingX?: numStr;
  px?: numStr;
  paddingY?: numStr;
  py?: numStr;
  paddingTop?: numStr;
  pt?: numStr;
  paddingRight?: numStr;
  pr?: numStr;
  paddingBottom?: numStr;
  pb?: numStr;
  paddingLeft?: numStr;
  pl?: numStr;
};

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

type PicssoBorderConfigType = {
  border?: string;
  borderRadius?: numStr;
  borderTop?: string;
  bt?: string;
  borderRight?: string;
  br?: string;
  borderBottom?: string;
  bb?: string;
  borderLeft?: string;
  bl?: string;
};

interface PicssoDefaultConfigType
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

export type { PicssoDefaultConfigType as default };
