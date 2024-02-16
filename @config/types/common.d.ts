import { PicssoDefaultConfigType } from "./index.d";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export declare type PicssoElementTypes = {
  [key: string]: React.ComponentType<any>;
};

export declare type PicssoConfigKeyType = {
  [key: string]: { getValue: (e: any) => string };
};

export declare type numStr = number | string;

export interface PicssoProps
  extends PicssoConfigKeyType,
    PicssoDefaultConfigType {
  children?: any;
  customConfig?: any;
  css?: string;
  [key: string]: any;
}

export type PicssoElementType = ForwardRefExoticComponent<
  PicssoProps & RefAttributes<HTMLElement>
>;
