const removeDuplicates = <T,>(arr: T[]): T[] => {
  const arrStringEl = arr.map((el) => JSON.stringify(el));
  const uniqArr: T[] = Array.from(new Set(arrStringEl)).map((el) =>
    JSON.parse(el)
  );

  return uniqArr;
};

export default removeDuplicates;
