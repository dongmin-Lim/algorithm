// 연속합 (동적계획법 알고리즘)

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0].split(" ")[0]); // 10
input = input[1].split(" ").map((i) => Number(i));
let sum = [];

// num = 10
// input = [ 10,  -4,  3,  1,  5, 6, -35, 12, 21, -1 ]

const result = (num, input) => {
  for (let i = 0; i < num; i++) {
    sum[i] = input[i];
    if (sum[i] < sum[i - 1] + input[i]) {
      // 이전까지 더한 값과 현재값 중 큰 값을 sum배열에 삽입(가장 큰 수만 남길 수 있다)
      sum[i] = sum[i - 1] + input[i];
    }
  }
};

result(num, input);
console.log(Math.max(...sum));

// 10
// 10 -4 3 1 5 6 -35 12 21 -1
// NaN is false
