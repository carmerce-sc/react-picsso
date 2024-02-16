import React, { ComponentType, ReactNode } from "react";
interface StyledElementProps {
    customConfig?: any;
    css?: string;
}
declare const createStyledElement: <Props extends {}>(tagName: React.ComponentType<Props> | keyof JSX.IntrinsicElements) => React.MemoExoticComponent<React.ForwardRefExoticComponent<React.PropsWithoutRef<Props & StyledElementProps & {
    children?: ReactNode;
}> & React.RefAttributes<HTMLDivElement>>>;
export default createStyledElement;
//# sourceMappingURL=createStyledElement.d.ts.map