'use strict';
// Даны числа, найти минимальное и максимальное значение

const arr = [4, -2, 5, 19, -130, 0, 10];
const arr2 = [12, 15, 20, 25, 59, 79];
/**
 * get maximum value from the array
 * @param {array} array
 * @returns {number} 
 */ 
function getMax(array) {
  if(!Array. isArray(array)) return;
  let result = array[0];
  for(let i = 1; i < array.length; i++) {
    if (array[i] > result) result = array[i];
  }
  return result;
}

/**
 * get minimum value from the array
 * @param {array} array
 * @returns {number}
 */
function getMin(array) {
  if (!Array.isArray(array)) return;
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < result) result = array[i];
  }
  return result;
}
console.log('min: ${getMin(arr)} : \n max : ${getMax(arr)}');

//*** ver 2 *** 

console.log ('Math.min.apply:', Math.min.apply(null, arr));
console.log ('Math.max.apply:', Math.max.apply(null, arr));

//*** ver 3*** 

Array.prototype.min = getMin3;
function getMin3(){
  if (!Array.isArray(this)) return;
  let result = this[0];
  for(let i = 1; i < this.length; i++){
    if(this[i] < result) result = this[i]
  }
  return result;
}
console.log ("Version 3 min:", arr.min());
console.log('arr.min() ===arr2.min() = ', arr.min)


 
