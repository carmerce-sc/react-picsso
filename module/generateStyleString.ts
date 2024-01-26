import picssoDefaultConfig from "../@config";
import { PicssoConfigKeyType } from "../@config/types/common";

export default function generateStyleString(
  props: PicssoConfigKeyType,
  customConfig: any
) {
  const totalKeys = Object.keys(props) as (keyof PicssoConfigKeyType)[];
  const targetConfig = { ...customConfig, ...picssoDefaultConfig };
  const piccsoConfigKeys = Object.keys(
    targetConfig
  ) as (keyof PicssoConfigKeyType)[];
  const targetPropsKeys = totalKeys
    .map((prop, i: number) =>
      prop in props && piccsoConfigKeys.includes(prop)
        ? totalKeys[i]
        : undefined
    )
    .filter((el): el is keyof PicssoConfigKeyType => el !== undefined);
  const styleProps = targetPropsKeys.map((key: keyof PicssoConfigKeyType) =>
    targetConfig?.[key]?.getValue(props[key])
  );
  const styleString = styleProps.join(" ");
  const stylePropsArray = Array.from(new Set(styleString.split(" ")));
  const formattedStyle = stylePropsArray.join(" "); // e.g. display:flex; justify-content:center; overflow-x:hidden;

  return formattedStyle;
}
