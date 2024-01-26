import { PicssoConfigKeyType } from "./@config/types/common";
import upperCaseObjectKeys from "./module/upperCaseObjectKeys";
import cse from "./module/createStyledElement";
import PDCT from "./@config/types/index.d";

let picsso = {
  html: cse("html"),
  body: cse("body"),
  div: cse("div"),
  span: cse("span"),
  header: cse("header"),
  footer: cse("footer"),
  section: cse("section"),
  article: cse("article"),
  nav: cse("nav"),
  aside: cse("aside"),
  h1: cse("h1"),
  h2: cse("h2"),
  h3: cse("h3"),
  h4: cse("h4"),
  h5: cse("h5"),
  h6: cse("h6"),
  p: cse("p"),
  ul: cse("ul"),
  ol: cse("ol"),
  li: cse("li"),
  table: cse("table"),
  tr: cse("tr"),
  td: cse("td"),
  th: cse("th"),
  form: cse("form"),
  button: cse("button"),
  a: cse("a"),
  strong: cse("strong"),
  em: cse("em"),
  b: cse("b"),
  i: cse("i"),
  blockquote: cse("blockquote"),
  canvas: cse("canvas"),
  iframe: cse("iframe"),
  br: cse("br"),
  hr: cse("hr"),
  img: cse("img"),
  input: cse("input"),
  link: cse("link"),
  meta: cse("meta"),
  area: cse("area"),
  base: cse("base"),
  col: cse("col"),
  command: cse("command"),
  embed: cse("embed"),
  keygen: cse("keygen"),
  param: cse("param"),
  source: cse("source"),
  track: cse("track"),
  wbr: cse("wbr"),
} as PicssoConfigKeyType;

picsso = { ...picsso, ...upperCaseObjectKeys(picsso) };

export default picsso;

export declare interface PicssoDefaultConfigType extends PDCT {}
