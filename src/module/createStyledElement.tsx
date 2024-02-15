import React, { Ref, forwardRef, memo, useCallback } from "react";
import { PicssoElementType, PicssoProps } from "../../@config/types/common";
import seperateStyleString from "./seperateStyleString";
import picssoStyled from "./picssoStyled";
import useClassName from "./useClassName";

// 스타일 캐시 전역 변수로 선언
const styleCache = new Map();

const createStyledElement = (tagName: string): PicssoElementType => {
  return memo(
    forwardRef(
      (
        { children, customConfig, rawCss, ...props }: PicssoProps,
        ref: Ref<HTMLElement>
      ) => {
        const [styleString, otherProps] = seperateStyleString(
          props,
          customConfig
        );
        const className = useClassName({
          rawCss,
          initialClassName: otherProps.className || "",
          styleCache,
        });

        const HTMLTag = picssoStyled(tagName)(styleString as string);

        return (
          <HTMLTag ref={ref} className={className || undefined} {...otherProps}>
            {children}
          </HTMLTag>
        );
      }
    )
  );
};

export default createStyledElement;
