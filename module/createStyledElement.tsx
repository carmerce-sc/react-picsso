import React, { ReactElement } from "react";
import { PicssoConfigKeyType } from "../types";
import generateStyleString from "./generateStyleString";
import picssoStyled from "./picssoStyled";

interface Props extends PicssoConfigKeyType {
  children?: any;
  customConfig?: any;
  [key: string]: any;
}

export default function createStyledElement(tagName: string) {
  return ({ children, customConfig, ...props }: Props): ReactElement => {
    const HTMLTag = picssoStyled(tagName)(
      generateStyleString(props, customConfig)
    );
    return <HTMLTag>{children}</HTMLTag>;
  };
}
