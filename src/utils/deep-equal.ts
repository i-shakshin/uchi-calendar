export const deepEqual = <Type>(value1: Type, value2: Type): boolean => {
  return JSON.stringify(value1) === JSON.stringify(value2);
};
