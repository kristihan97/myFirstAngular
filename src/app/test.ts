// import { SourceMap } from '@angular/compiler';

// console.log(333);

// function getNumber(num: number): number {
//   return num;
// }

// function printName(obj: { first: string; last?: number }) {
//   console.log(obj.last?.toString());
// }

// type myType = string | number;
// const randomValue: myType = 'Hello';

// function printInput(input: myType) {
//   console.log(input);
// }
// printInput(typeof randomValue);

// function returnVal(): 'hei' | 'hade' | 'ok' {
//   return 'hei';
// }

// function compare(a: string, b: string): -1 | 0 | 1 {
//   return a === b ? 0 : a > b ? 1 : -1;
// }

// let myArray: string[] = ['hello', 'ali', 'Ali', 'ALI', 'ALi', 'AlI'];

// console.log(myArray.sort());

// interface myInt1 {
//   width: number | string;
// }

// // declare function handleRequest(url: string, method: 'GET' | 'POST'): void;

// // const req = { url: 'https://example.com', method: 'GET' };
// // handleRequest(req.url, req.method as 'GET');

// let y = [1, 2, 3] as const;
// let x;
// console.log(y);
// console.log(x);

// function paddingLeft(padding: number | string, input: string): string {
//   if (typeof padding === 'number') {
//     return ' '.repeat(padding) + input;
//   }
//   return `${padding}${input}`;
// }

// console.log(paddingLeft(7, 'hvordan...?'));

// function stringOrInt(input: string | number) {
//   if (typeof input === 'string') {
//     return input.length;
//   }
//   return input * 5.2;
// }

// console.log(stringOrInt('heheheheh'));

// interface Delta {
//   kind: 'delta';
//   rifle: string;
// }

// interface Marin {
//   kind: 'marin';
//   pistol: string;
// }

// type Soldier = Delta | Marin;

// function getWeapon(input: Soldier) {
//   switch (input.kind) {
//     case 'delta':
//       return `The weapon is ${input.rifle}`;

//     case 'marin':
//       return `The weapon is ${input.pistol}`;
//   }
// }

// let delta1: Soldier;

// delta1 = {
//   kind: 'delta',
//   rifle: 'M4A1',
// };

// console.log(getWeapon(delta1));

// type fancyFunc = {
//   num: number;
//   (somePar: string): number;
// };

// function myFancyFunc(somePar: string) {
//   return somePar.length;
// }

// myFancyFunc.num = 66.89;

// function doMyFancyFunc(fn: fancyFunc) {
//   console.log(
//     `${fn('Jeg heter abdi og jeg er ')}${myFancyFunc.num} år gammel.`
//   );
// }

// doMyFancyFunc(myFancyFunc);

// type someCons = {
//   new (n: number): string;
// };

// function someFunc(n: number) {
//   return n.toString();
// }

// function fn(cons: someCons) {
//   return new cons(5) + 'bbb';
// }

// function printMyVal<S>(par: S): S {
//   return par;
// }

// function compare<Z extends { length: number }>(a: Z, b: Z) {
//   if (a.length === b.length) {
//     return 0;
//   }
//   return a.length > b.length;
// }

// console.log(compare([0, 1, 3, 2], [1, 1, 1]));

// let myArray = [1, 2, 3];
// let myArray2 = [4, 5, 6];
// let myArray3 = ['nei', 'ja'];
// let myArra4 = [true, false];

// function combine<Type>(par1: Type[], par2: Type[]): Type[] {
//   return par1.concat(par2);
// }

// console.log(combine<string | boolean>(myArray3, myArra4));

// function giveNum(num: number): number {
//   //   alert(`Your number is ${num}`);
//   return num;
// }

// function useCallBack(parFunc: (num: number) => number): void {
//   let name = prompt('Your name: ');
//   let num = parseInt(prompt('Enter a number: ') || '0');
//   if (name) {
//     alert(`Hello ${name}, your number is ${parFunc(num)}`);
//   }
// }

// useCallBack(giveNum);
// import { map } from 'rxjs';

function fancyStringFunc(s1: string, ...strArray: string[]) {
  return strArray.map((x) => s1 + x);
}

console.log(fancyStringFunc('@', 'Elia', 'Harry', ''));
let randomArray: number[] = [];
let randomArray1: number[] = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(i);
  randomArray1.push(i / 2);
}
let randomArray2: number[] = [];
randomArray1.forEach((element) => randomArray2.push(element * 2));
const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
randomArray.push(...randomArray1);
console.log(randomArray, randomArray1, randomArray2);
