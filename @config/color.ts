import { PicssoConfigKeyType } from "./types/common";

export default {
  background: { getValue: (background: string) => `background:${background};` },
  backgroundColor: {
    getValue: (backgroundColor: string) =>
      `background-color:${backgroundColor};`,
  },
  bg: { getValue: (background: string) => `background:${background};` },
  color: { getValue: (color: string) => `color:${color};` },
} as PicssoConfigKeyType;
