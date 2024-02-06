import React, { Ref, forwardRef } from "react";
import { PicssoElementType, PicssoProps } from "../../@config/types/common";
import seperateStyleString from "./seperateStyleString";
import picssoStyled from "./picssoStyled";

export default function createStyledElement(
  tagName: string
): PicssoElementType {
  return forwardRef(
    (
      { children, customConfig, ...props }: PicssoProps,
      ref: Ref<HTMLElement>
    ) => {
      const [styleString, otherProps] = seperateStyleString(
        props,
        customConfig
      );
      const HTMLTag = picssoStyled(tagName)(styleString as string);
      return (
        <HTMLTag ref={ref} {...otherProps}>
          {children}
        </HTMLTag>
      );
    }
  );
}
