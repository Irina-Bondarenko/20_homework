"use strict";

// HOMEWORK #20

//1//
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let concatArr1Arr2 = arr1.concat(arr2);
console.log(concatArr1Arr2);

//2//
let arr3 = [1,2,3];
arr3.reverse();
console.log(arr3);

//3//

let arr4 = [1,2,3];
arr4.push(4,5,6);
console.log(arr4);

//4//

let arr5 = [1,2,3];
arr5.unshift(4,5,6);
console.log(arr5);

//5//

let arr6 =  ['js', 'css', 'jq'];
console.log(arr6[0]);

//6//

let arr7 =  ['js', 'css', 'jq'];
console.log(arr7[arr7.length-1]);

//7//

let arr8 =  [1,2,3,4,5];

let arr9 = arr8.slice(0, 3);
console.log(arr9);

//8//

let arr10 =  [1,2,3,4,5];

let arr11 = arr10.slice(-2);
console.log(arr11);

//9//

let arr12 =  [1,2,3,4,5];
arr12.splice(1,2);
console.log(arr12);

//10//

let arr13 =  [1,2,3,4,5];
let arr14 = arr13.slice(1,4);
console.log(arr14);

//11//

let arr15 =  [1,2,3,4,5];
arr15.splice(2, 0, "a", "b", "c");
console.log(arr15);

//12//

let arr16 =  [1,2,3,4,5];
arr16.splice(1, 0, "a", "b");
arr16.splice(6,0, "c");
arr16.push("e");
console.log(arr16);

//13//

let arr17 =  [3,4,1,2,7];
arr17.sort(compareNumeric);

function compareNumeric(a, b) {
    // alert( a + " <> " + b )
    if (a > b) return 1;   // если первое значение больше второго
    if (a === b) return 0; // если равны
    if (a < b) return -1

}
console.log(arr17);

//14//

let arr18 =  [5,6,7,8,9];

const result = arr18.reduce(
    function (accum, item) {
        accum += item;
        return accum;
    },
    0
)
console.log(result);


//15//

let arr19 =  [5,6,7,8,9];

const result2 = arr19.reduce(
    function (accum, item) {
        accum.push (item ** 2);
        return accum;
    },
    []
)
console.log(result2);

//16//

let arr20 =  [1,-3, 5, 6,-7, 8, 9,-11];

const result3 = arr20.filter(filterFuncNeg);
console.log(result3);

function filterFuncNeg (item) {
    return item < 0;

}

//17//

let arr21 =  [1,-3, 5, 6,-7, 8, 9,-11];

const result4 = arr21.filter(filterFuncEven);
console.log(result4);

function filterFuncEven (item) {
    return item % 2 === 0;

}

//18//

let arr22 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

const result5 = arr22.filter(stringLength);

function stringLength (item) {
    return item.length >= 5;
}
console.log(result5)


//19//

let arr23 = [1, 2, [3, 4], 5, [6, 7]];

const result6 = arr23.reduce(
    function (accum, item) {
        if (Array.isArray(item)) {
            accum.push(item)}
        return accum;
    },
    []
)
console.log(result6)


//20//

let arr24 =  [5,-3, 6,-5, 0,-7, 8, 9];

const result7 = arr24.reduce(
    function (accum, item) {
        if (item < 0) {
        accum++}
        return accum;
    },
    0
)
console.log(result7);