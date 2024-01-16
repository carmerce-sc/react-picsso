import picssoDefaultConfig from "../@picsso.defaultConfig";
import { PicssoConfigKeyType } from "../types";
import picssoWarning from "./picssoWarning";

let picssoCustomConfig: PicssoConfigKeyType = {};

try {
  picssoCustomConfig = require("../../picsso.config");
} catch (e) {
  picssoWarning();
}

export const targetConfig = {
  ...picssoCustomConfig,
  ...picssoDefaultConfig,
};

export default function generateStyleString(props: PicssoConfigKeyType) {
  const totalKeys = Object.keys(props) as (keyof PicssoConfigKeyType)[];
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
