const bob: string = "hey";
console.log(bob);

interface MyObj {
  x: number;
  y: string;
}

const obj: MyObj = {
  x: 33,
  y: "Something else",
};

type AddFunc = (x: number, y: number) => number;
export const add: AddFunc = function (x: number, y: number) {
  return x + y;
};

interface ArrayLengthProps<T> {
  values: T[];
  index?: number;
}

export const ReduceArray = ({ values }: ArrayLengthProps<number>): number => {
  return values.reduce((acc, val) => {
    return acc + val;
  });
};

export const ArrayLength = <T>({
  values,
  index,
}: ArrayLengthProps<T>): T | null => {
  return index < values.length ? values[index] : null;
};
console.log(ArrayLength({ values: [1, 2], index: 1 }));
