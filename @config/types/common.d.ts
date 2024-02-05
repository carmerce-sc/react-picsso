export declare type PicssoElementTypes = {
  [Tag in keyof JSX.IntrinsicElements]: PicssoElementType;
};

export declare type PicssoConfigKeyType = {
  [key: string]: { getValue: (e: any) => string };
};

export declare type numStr = number | string;
export interface PicssoProps extends PicssoConfigKeyType {
  children?: any;
  customConfig?: any;
  [key: string]: any;
}

export type PicssoElementType = ({
  children,
  customConfig,
  ...props
}: PicssoProps) => React.JSX.Element;
