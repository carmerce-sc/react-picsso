import React, { forwardRef, ComponentType, ReactNode, useMemo } from "react";
import styled from "@emotion/styled";
import seperateStyleString from "./seperateStyleString";

interface StyledElementProps {
  customConfig?: any;
  css?: string;
}

const createStyledElement = <Props extends {}>(
  tagName: ComponentType<Props> | keyof JSX.IntrinsicElements
) => {
  type ComponentProps = Props & StyledElementProps;

  return React.memo(
    forwardRef<HTMLDivElement, ComponentProps & { children?: ReactNode }>(
      ({ children, customConfig, ...props }, ref) => {
        const [styleString, otherProps] = seperateStyleString(
          props,
          customConfig
        );

        const StyledComponent = useMemo(() => {
          return styled(tagName as any)<ComponentProps>`
            ${(props) => props.css || ""}
            ${styleString}
          `;
        }, [styleString, tagName]);

        return (
          <StyledComponent ref={ref as any} {...otherProps}>
            {children}
          </StyledComponent>
        );
      }
    )
  );
};

export default createStyledElement;
