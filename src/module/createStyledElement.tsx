import React, { Ref, forwardRef } from "react";
import { PicssoElementType, PicssoProps } from "../../@config/types/common";
import seperateStyleString from "./seperateStyleString";
import generateRandomString from "./generateRandomString";
import picssoStyled from "./picssoStyled";

const extractKeyframes = (cssString: string) => {
  const keyframesRegex = /@keyframes\s+[\s\S]+?\{[\s\S]+?\}\s*\}/g;
  const fontFaceRegex = /@font-face\s*\{[\s\S]+?\}/g;

  const keyframes = cssString.match(keyframesRegex) || [];
  const fontFaces = cssString.match(fontFaceRegex) || [];

  const cleanedCss = cssString
    .replace(keyframesRegex, "")
    .replace(fontFaceRegex, "");

  return {
    keyframes: keyframes.join(" "),
    fontFaces: fontFaces.join(" "),
    cleanedCss,
  };
};

const createStyledElement = (tagName: string): PicssoElementType => {
  return forwardRef(
    (
      { children, customConfig, rawCss, ...props }: PicssoProps,
      ref: Ref<HTMLElement>
    ) => {
      const [styleString, otherProps] = seperateStyleString(
        props,
        customConfig
      );
      const HTMLTag = picssoStyled(tagName)(styleString as string);

      let className = otherProps.className;

      if (rawCss) {
        let styleSheet = document.createElement("style");
        const rs = `picsso-${generateRandomString()}`;
        styleSheet.setAttribute("data-picsso", rs);
        const injectionStyleString = `.${rs} {${rawCss.replace(/\s+/g, " ")}}`;
        if (injectionStyleString.includes("@keyframes")) {
          let keyframeStyleSheet = document.createElement("style");
          keyframeStyleSheet.setAttribute("data-picsso_keyframe", rs);
          keyframeStyleSheet.innerText =
            extractKeyframes(injectionStyleString).keyframes;
          document.head.appendChild(keyframeStyleSheet);
        }
        if (injectionStyleString.includes("@font-face")) {
          let fontFaceStyleSheet = document.createElement("style");
          fontFaceStyleSheet.setAttribute("data-picsso_fontFace", rs);
          fontFaceStyleSheet.innerText =
            extractKeyframes(injectionStyleString).fontFaces;
          document.head.appendChild(fontFaceStyleSheet);
        }

        styleSheet.innerText = injectionStyleString;
        className ? (className += `${rs}`) : (className = `${rs}`);
        otherProps.className = className;

        document.head.appendChild(styleSheet);
      }
      return (
        <HTMLTag ref={ref} {...otherProps}>
          {children}
        </HTMLTag>
      );
    }
  );
};

export default createStyledElement;
