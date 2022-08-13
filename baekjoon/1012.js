// 그래프 알고리즘

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const test_case = Number(input[0]); // 1(테스트 케이스)
input.shift();
const info = input[0].split(" ").map((x) => +x); // [10, 8, 17]
input.shift();
let arr = [];
const number = 0;

for (let i = 0; i < info[2]; i++) {
  arr[i] = input[i].split(" ").map((x) => +x);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  compare = arr[i];
  arr[i - 1] == arr[i][0];
}

// [1,1] = [0,1], [1,0], [2,1], [1,2] 중 1이 있으면 자신을 제거하고 다음으로 넘어감.
// 만약 없다면 number += 1
