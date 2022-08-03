let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0].split(" ")[0]); // 10
input = input[1].split(" ").map((i) => Number(i));
input = insertionSort(input);
let result = 0;
let sum = 0;

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;
    while (left >= 0 && array[left] > cur) {
      array[left + 1] = array[left];
      array[left] = cur;
      cur = array[left];
      left--;
    }
  }
  return array;
}

function sum_time(array) {
  for (let i = 0; i < array.length; i++) {
    sum = sum += array[i];
    result += sum;
  }
  return result;
}

console.log(sum_time(input));
