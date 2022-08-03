export const sortByLetter = (strA: string, strB: string) => {
  const res = strA.toLocaleLowerCase().localeCompare(strB.toLocaleLowerCase());
  if (res !== 0) {
    return res;
  }
  if (strA > strB) return 1;
  if (strA < strB) return -1;
  return 0;
};
