export const deepClone = <Type>(value: Type): Type => {
  return JSON.parse(JSON.stringify(value));
};
