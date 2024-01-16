import React, { CSSProperties, ReactElement } from "react";

const picssoStyled =
  <P extends Record<string, unknown>>(
    Component: React.ComponentType<P> | string
  ) =>
  (styleString: string) =>
  (props: P): ReactElement =>
    <Component {...props} style={camelStyle(styleString)} />;

const camelStyle = (styleString: string): CSSProperties => {
  const tempStyleObject: Record<string, any> = {};
  styleString.split(";").forEach((styleProperty) => {
    const [key, value] = styleProperty
      .split(":")
      .map((item: string) => item.trim());
    if (key && value) {
      const formattedKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase()); // to camelCase
      tempStyleObject[formattedKey] = value;
    }
  });

  return tempStyleObject as CSSProperties;
};

export default picssoStyled;
