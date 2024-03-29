import createStyledElement from "../src/module/createStyledElement";
import htmlTags from "../@config/htmlTags";
import { PicssoElementTypes } from "@config/types/common";

const picsso: PicssoElementTypes = htmlTags.reduce((acc, htmlKey) => {
  acc[htmlKey] = createStyledElement(htmlKey as keyof JSX.IntrinsicElements);
  return acc;
}, {} as PicssoElementTypes);

export default picsso;
