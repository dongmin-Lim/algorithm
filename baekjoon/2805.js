// 이진탐색 알고리즘

let input = require("fs").readFileSync("example.txt").toString().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let meter = Number(input[0].split(" ")[1]); // 7
input = input[1].split(" ").map((i) => Number(i)); // [ 20, 15, 10, 17 ]

let min = 0;
let pointer = 0;
let max = Math.max(...input); // 초깃값 max 20

while (true) {
  let sum = 0;
  pointer = Math.floor((max + min) / 2);
  if (min == pointer || max == pointer) {
    console.log(pointer);
    break;
  }

  input.forEach((index) => {
    // sum 구하는 과정
    if (index - pointer > 0) {
      sum += index - pointer;
    }
  });

  if (meter == sum) {
    console.log(pointer);
    break;
  }
  if (meter < sum) {
    min = pointer;
  } else max = pointer;
}
