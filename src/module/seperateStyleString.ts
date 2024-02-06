import picssoDefaultConfig from "../../@config";
import { PicssoConfigKeyType } from "../../@config/types/common";

export default function seperateStyleString(
  props: PicssoConfigKeyType,
  customConfig: any
) {
  const totalKeys: string[] = Object.keys(props) as string[];
  const targetConfig = { ...customConfig, ...picssoDefaultConfig };
  const piccsoConfigKeys = Object.keys(
    targetConfig
  ) as (keyof PicssoConfigKeyType)[];

  let targetPropsKeys: string[] = [];
  let otherPropsKeys: string[] = [];
  totalKeys.forEach((prop, i: number) => {
    if (prop in props && piccsoConfigKeys.includes(prop)) {
      targetPropsKeys.push(totalKeys[i]);
    } else {
      otherPropsKeys.push(prop);
    }
  });

  const styleProps = targetPropsKeys.map((key: keyof PicssoConfigKeyType) =>
    targetConfig?.[key]?.getValue(props[key])
  );
  const styleString = styleProps.join(" ");
  const stylePropsArray = Array.from(new Set(styleString.split(";")));
  const formattedStyleString: string = stylePropsArray.join(";"); // e.g. display:flex; justify-content:center; overflow-x:hidden;

  const otherProps: any = otherPropsKeys.reduce((acc: any, propKey: string) => {
    acc[propKey] = props[propKey];
    return acc;
  }, {});

  return [formattedStyleString as string, otherProps as any];
}
