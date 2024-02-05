function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function upperCaseObjectKeys<T>(obj: { [key: string]: T }): {
  [key: string]: T;
} {
  const upperCaseObject: { [key: string]: T } = {};
  Object.keys(obj).forEach((key) => {
    const upperCaseKey = capitalizeFirstLetter(key);
    upperCaseObject[upperCaseKey] = obj[key];
  });
  return upperCaseObject;
}
