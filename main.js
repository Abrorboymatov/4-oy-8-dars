// Array.prototype.myForEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this);
//   }
// };

// arr.myForEach((item, idx, arr) => {
//   //   console.log(item, idx, arr);
// });


// let arr = [1, 2, 3, 4, 5];
// Array.prototype.myMap = function (cb) {
//   let newArr = [];

//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, this));
//   }
//   return newArr;
// };
// let arr2 = arr.myMap((item) => {
//   return item * item;
// });

// console.log(arr2);


// filter methodi
// Array.prototype.myFilter = function (cb) {
//     let newArr = [];
//     for (let i=0; i < this.length; i++) {
//         if (cb(this[i]),i , this) {
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }

// let arr = [1, 2, 3, 4, 5];
// let juftlari = arr.myFilter((val) => val % 2 === 0);
// console.log(juftlari);


// 


// reduce methodi 
// Array.prototype.myReduce = function (cb,Value) {
//   let accumulator = Value;
//   let startIndex = 0;

//   if (accumulator === undefined) {
//     accumulator = this[0];
//     startIndex = 1;
//   }

//   for (let i = 0; i < this.length; i++) {
//     accumulator = cb(accumulator, this[i], i, this);
//   }

//   return accumulator;
// };
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.myReduce((acc, val) => acc + val, 0);
// console.log(sum); 



// some methodi
// Array.prototype.mySome = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       return true;
//     }
//   }
//   return false;
// };
// let arr = [1, 3, 5, 7];
// let newarr = arr.mySome((val) => val % 2 === 0);
// console.log(newarr); 


// every methodi 

// Array.prototype.myEvery = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i], i, this)) {
//       return false;
//     }
//   }
//   return true;
// };
// let nums = [2, 4, 6];
// let allEven = nums.myEvery((val) => val % 2 === 0);
// console.log(allEven); 

// find
// Array.prototype.myFind = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       return this[i];
//     }
//   }
//   return undefined;
// };
// let arr = [3, 7, 10, 15];
// let first = arr.myFind((val) => val > 9);
// console.log(first); 


