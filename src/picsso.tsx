import { PicssoElementTypes } from "../@config/types/common";
import upperCaseObjectKeys from "./module/upperCaseObjectKeys";
import createStyledElement from "./module/createStyledElement";
// import PDCT from "../@config/types";

type IntrinsicElementKeys = keyof JSX.IntrinsicElements;

// 추출된 키를 문자열 배열로 변환
const keysArray: IntrinsicElementKeys[] = [];

// 매핑을 사용하여 배열을 채움
for (let key in {} as JSX.IntrinsicElements) {
  keysArray.push(key as IntrinsicElementKeys);
}

let _picsso = {};
keysArray.forEach((htmlKey: string) => {
  _picsso = { ..._picsso, [htmlKey]: createStyledElement(htmlKey) };
});

const picsso = {
  ..._picsso,
  // ...upperCaseObjectKeys(_picsso),
};

export default picsso;

// export interface PicssoDefaultConfigType extends PDCT {}
