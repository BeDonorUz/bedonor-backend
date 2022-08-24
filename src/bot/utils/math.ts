export const range = (from: number, to: number): number[] => {
  return [...Array(to + 1).keys()].slice(from);
};
