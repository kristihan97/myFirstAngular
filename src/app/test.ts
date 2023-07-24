console.log(333);

function getNumber(num: number): number {
  return num;
}

function printName(obj: { first: string; last?: number }) {
  console.log(obj.last?.toString());
}

type myType = string | number;
const randomValue: myType = 'Hello';

function printInput(input: myType) {
  console.log(input);
}
printInput(typeof randomValue);

function returnVal(): 'hei' | 'hade' | 'ok' {
  return 'hei';
}

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

let myArray: string[] = ['hello', 'ali', 'Ali', 'ALI', 'ALi', 'AlI'];

console.log(myArray.sort());

interface myInt1 {
  width: number | string;
}

// declare function handleRequest(url: string, method: 'GET' | 'POST'): void;

// const req = { url: 'https://example.com', method: 'GET' };
// handleRequest(req.url, req.method as 'GET');

let y = [1, 2, 3] as const;
let x;
console.log(y);
console.log(x);
