import React, { CSSProperties, ReactElement } from "react";

const styleCache = new Map<string, CSSProperties>();

const camelStyle = (styleString: string): CSSProperties => {
  const cachedStyle = styleCache.get(styleString);
  if (cachedStyle) {
    return cachedStyle;
  }

  const tempStyleObject: Record<string, any> = {};
  styleString.split(";").forEach((styleProperty) => {
    const [key, value] = styleProperty
      .split(":")
      .map((item: string) => item.trim());
    if (key && value) {
      const formattedKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      tempStyleObject[formattedKey] = value;
    }
  });

  const camelCaseStyle = tempStyleObject as CSSProperties;
  styleCache.set(styleString, camelCaseStyle);

  return camelCaseStyle;
};

const picssoStyled = <P extends Record<string, unknown>>(
  Component: React.ComponentType<P> | string
): ((styleString: string) => React.FunctionComponent<P>) => {
  return (styleString: string) => {
    return (props: P): ReactElement => {
      const camelCaseStyle = camelStyle(styleString);
      return <Component {...props} style={camelCaseStyle} />;
    };
  };
};

export default picssoStyled;
