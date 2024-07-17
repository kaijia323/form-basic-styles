export const turnPx = (num?: string | number) => {
  if (isNaN(Number(num))) {
    return num;
  }
  return num + "px";
};
