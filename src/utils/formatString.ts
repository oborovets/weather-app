export const NO_INFO = "No info";
export default function (strA: string, strB = "No info", strC = "") {
  return strA
    .padEnd(17, "\xa0")
    .concat(strB)
    .concat(strB === NO_INFO ? "" : strC);
}
