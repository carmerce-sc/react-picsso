import React, { ReactElement } from "react";
import { PicssoConfigKeyType } from "../types";
import generateStyleString from "./generateStyleString";
import picssoStyled from "./picssoStyled";

interface Props extends PicssoConfigKeyType {
  children?: any;
  [key: string]: any;
}

export default function createStyledElement(tagName: string) {
  return ({ children, ...props }: Props): ReactElement => {
    const HTMLTag = picssoStyled(tagName)(generateStyleString(props));
    return <HTMLTag>{children}</HTMLTag>;
  };
}
