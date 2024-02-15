import { useEffect, useState } from "react";
import generateRandomString from "./generateRandomString";

export default function useStyledClassName({
  rawCss,
  initialClassName,
  styleCache,
}: {
  rawCss?: string;
  initialClassName?: string;
  styleCache: any;
}) {
  const [className, setClassName] = useState(initialClassName);

  useEffect(() => {
    if (rawCss) {
      let rs = styleCache.get(rawCss);
      if (!rs) {
        rs = `picsso-${generateRandomString()}`;
        styleCache.set(rawCss, rs);
        const { keyframes, fontFaces, cleanedCss } = extractKeyframes(rawCss);
        const styleSheet = document.createElement("style");
        styleSheet.setAttribute("data-picsso", rs);
        styleSheet.textContent = `.${rs} { ${cleanedCss} } ${keyframes} ${fontFaces}`;
        document.head.appendChild(styleSheet);
      }
      setClassName((prevClassName) => `${prevClassName} ${rs}`.trim());
    }
  }, [rawCss, initialClassName]);

  return className;
}

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
