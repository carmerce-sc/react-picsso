import React, { CSSProperties, forwardRef, ComponentType } from "react";

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

const picssoStyled =
  <P extends Record<string, any>>(Component: ComponentType<P> | string) =>
  (styleString: string) => {
    const StyledComponent = forwardRef<
      HTMLElement,
      P & { ref?: React.Ref<HTMLElement> }
    >((props, ref) => {
      const camelCaseStyle = camelStyle(styleString);
      const componentProps = { ...props, style: camelCaseStyle };

      return React.createElement(
        Component,
        { ...componentProps, ref },
        props.children
      );
    });

    StyledComponent.displayName = `Styled(${
      typeof Component === "string"
        ? Component
        : Component.displayName || "Component"
    })`;

    return StyledComponent;
  };

export default picssoStyled;
