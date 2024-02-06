import { ForwardRefExoticComponent, RefAttributes } from 'react';

type PicssoColorConfigType = {
  background?: string;
  backgroundColor?: string;
  /** Equals to background. */
  bg?: string;
  color?: string;
};

declare type PicssoElementTypes = {
  [Tag in keyof JSX.IntrinsicElements]: PicssoElementType;
};

declare type PicssoConfigKeyType = {
  [key: string]: { getValue: (e: any) => string };
};

declare type numStr = number | string;
interface PicssoProps extends PicssoConfigKeyType {
  children?: any;
  customConfig?: any;
  [key: string]: any;
}

type PicssoElementType = ForwardRefExoticComponent<
  PicssoProps & RefAttributes<HTMLElement>
>;

type PicssoMarginConfigType = {
  margin?: numStr;
  /** Equals to margin. */
  m?: numStr;
  /** Equals to margin-left and margi-right. */
  marginX?: numStr;
  /** Equals to margin-left and margi-right. */
  mx?: numStr;
  /** Equals to margin-top and margi-bottom. */
  marginY?: numStr;
  /** Equals to margin-top and margi-bottom. */
  my?: numStr;
  marginTop?: numStr;
  /** Equals to margin-top. */
  mt?: numStr;
  marginRight?: numStr;
  /** Equals to margin-right. */
  mr?: numStr;
  marginBottom?: numStr;
  /** Equals to margin-bottom. */
  mb?: numStr;
  marginLeft?: numStr;
  /** Equals to margin-left. */
  ml?: numStr;
};

type PicssoPaddingConfigType = {
  padding?: numStr;
  /** Equals to padding. */
  p?: numStr;
  /** Equals to margin-left and margi-right. */
  paddingX?: numStr;
  /** Equals to margin-left and margi-right. */
  px?: numStr;
  /** Equals to margin-top and margi-bottom. */
  paddingY?: numStr;
  /** Equals to margin-top and margi-bottom. */
  py?: numStr;
  paddingTop?: numStr;
  /** Equals to padding-top. */
  pt?: numStr;
  paddingRight?: numStr;
  /** Equals to padding-right. */
  pr?: numStr;
  paddingBottom?: numStr;
  /** Equals to padding-bottom. */
  pb?: numStr;
  paddingLeft?: numStr;
  /** Equals to padding-left. */
  pl?: numStr;
};

type PicssoSizeConfigType = {
  width?: numStr;
  /** Equals to width. */
  w?: numStr;
  height?: numStr;
  /** Equals to height. */
  h?: numStr;
  size?: numStr | [numStr, numStr];
  /** Apply 100% to width and height respectively. */
  fullP?: boolean;
  /** Apply 100vw and 100vh to width and height respectively. */
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

declare const picsso: PicssoElementTypes;

declare module "react-picsso" {}
interface PicssoDefaultConfigType
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

export { type PicssoDefaultConfigType, picsso as default };
