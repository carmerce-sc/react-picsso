import React, { Ref, forwardRef, memo, useMemo } from "react";
import { PicssoElementType, PicssoProps } from "../../@config/types/common";
import seperateStyleString from "./seperateStyleString";
import picssoStyled from "./picssoStyled";
import getClassName from "./getClassName";

const styleCache: Map<string, string> = new Map();

const createStyledElement = (tagName: string): PicssoElementType => {
  return memo(
    forwardRef(
      (
        { children, customConfig, css, ...props }: PicssoProps,
        ref: Ref<HTMLElement>
      ) => {
        const [styleString, otherProps] = seperateStyleString(
          props,
          customConfig
        );
        const className = getClassName({
          css,
          initialClassName: otherProps.className || "",
          styleCache,
        });

        const HTMLTag = useMemo(
          () => picssoStyled(tagName)(styleString as string),
          [tagName, styleString]
        );

        return (
          <HTMLTag ref={ref} {...otherProps} className={className || undefined}>
            {children}
          </HTMLTag>
        );
      }
    )
  );
};

export default createStyledElement;
