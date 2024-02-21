import { PicssoConfigKeyType } from "./types/common";

const color = {
  background: (background: string) => `background:${background};`,
  backgroundColor: (backgroundColor: string) =>
    `background-color:${backgroundColor};`,
  bg: (background: string) => `background:${background};`,
  color: (color: string) => `color:${color};`,
} as PicssoConfigKeyType;

export default color;
