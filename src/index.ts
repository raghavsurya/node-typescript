const bob: string = "hey";
console.log(bob);

interface MyObj {
  x: number;
  y: string;
}

const obj: MyObj = {
  x: 33,
  y: "Abi",
};

type AddFunc = (x: number, y: number) => number;
export const add: AddFunc = function (x: number, y: number) {
  return x + y;
};
console.log(obj);
console.log(add(7, 8));
