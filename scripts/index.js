"use strict";

// HOMEWORK #21

//1//
console.log("Task#1");


const arr1 = ["a", "b", "c", "d"];
const firstSum = arr1[0] + "+" + arr1[1];
const secondSum = arr1[2] + "+" + arr1[arr1.length-1];
console.log(firstSum, secondSum);

//2//
console.log("Task#2");

const arr2 = [2, 5, 3, 9];
const firstMul = arr2[0] * arr2[1];
const secondMul = arr2[2] * arr2[3];
const result = firstMul + secondMul;

console.log(result);

//3//
console.log("Task#3");

const arr3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arr3[1][0]);

//4//
console.log("Task#4");

const obj1 = {
    js: ["jQuery", "Angular"],
    php: "hello",
    css: "world"};

console.log(obj1.js[0]);


//5//
console.log("Task#5");

const arr5= [];
let arrayX = "";

for (let i = 0; i < 5; i++) {
    arr5.push(arrayX);
    arrayX += "x";
}

console.log(arr5);


//6//
console.log("Task#6");

const arr6 = [];
let num1 = 0;

for (let i = 1; i < 5; i++) {
    num1 = "";
    for (let x = 1; x <= i; x++) {
        num1 += i;
    }
    arr6.push(num1);
}
console.log(arr6);

//7//
console.log("Task#7");

function fun1 (item, arrayLength) {
 let arr7 = [];
for (let i = 0; i <= arrayLength-1; i++) {
    arr7.push(item);
}
 return arr7;
}
console.log(fun1("x", 5));

//8//
console.log("Task#8");

let arr8 = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
for (let i = 0; i < arr8.length; i++) {
   sum += arr8[i];
    if (sum >= 10) {
        console.log(i+1);
        break;
    }
}

//9//
console.log("Task#9");

let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr9Red = arr9.reduce(
    function (accum, item) {
        accum.unshift(item);
        return accum;
    },
    []
);
console.log(arr9Red);

//10//
console.log("Task#10");

let arr10 = [[1, 2, 3], [4, 5], [6], 21];
let arr10Flat = arr10.flat();

let arr10FlatRed = arr10Flat.reduce(
    function (accum, item) {
        accum +=item;
        return accum;
    },
);
console.log(arr10FlatRed);

//11//
console.log("Task#11");

let arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let arr11Flat = arr11.flat(2);

let arr11FlatRed = arr11Flat.reduce(
    function (accum, item) {
    accum += item;
    return accum;
},
    );
console.log(arr11FlatRed);