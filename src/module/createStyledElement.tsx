import React, { ReactElement } from "react";
import { PicssoElementType, PicssoProps } from "../../@config/types/common";
import generateStyleString from "./generateStyleString";
import picssoStyled from "./picssoStyled";

export default function createStyledElement(
  tagName: string
): PicssoElementType {
  return ({ children, customConfig, ...props }: PicssoProps): ReactElement => {
    const HTMLTag = picssoStyled(tagName)(
      generateStyleString(props, customConfig)
    );
    return <HTMLTag>{children}</HTMLTag>;
  };
}
