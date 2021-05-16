"use strict";
// const myName = "your name";
// const hello = (userName: string): string => `hello, ${userName}`;
// console.log(hello);
// //creating an object in typescript
// let myObject : {name: string, dept: string, age: number} = {
//     name: 'odinaka',
//     dept: 'EEE',
//     age: 11
// }
// //creating objects with interfaces, optional property and readonly
// interface Student { 
//     name: string, 
//     age: number, 
//     enrolled: boolean,
//     phone?: number,
//     readonly id: number
//   };
//   let newStudent:Student = {name: 'Maria', age: 10, enrolled: true, phone: 234, id: 1};
//   //exercise: convert to typescript
// const arrays = require('./utilities/arrays.js');
// const numbers = require('./utilities/numbers.js');
// const strings = require('./utilities/strings.js');
// const numArr: number[] = [3, 4, 5, 6];
// const wordArr: string[] = ['cat', 'dog', 'rabbit', 'bird'];
// const arrSum: number[] = arrays.addArr(numArr);
// const mixArr: (string| number) = arrays.concatArr(numArr, wordArr);
// const myNum: number = ('15' as unknown) as any % 2;
// // results of function calls
// console.log(arrays.cut3(mixArr));
// console.log(numbers.sum(arrSum, myNum));
// console.log(strings.capitalize('the quick brown fox'));
// console.log(numbers.multiply('5', 8));
// console.log(arrays.lgNum(mixArr));
var myFunc = function (num) {
    return num * num;
};
