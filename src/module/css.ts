export default function css(
  strings: TemplateStringsArray,
  ...values: string[]
): string {
  let result = "";

  strings.forEach((string, i) => {
    result += string + (values[i] || "");
  });

  return result;
}
