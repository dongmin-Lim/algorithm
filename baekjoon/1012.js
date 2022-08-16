// 유기농 배추 (그래프 알고리즘)

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const test_case = Number(input[0]); // 1(테스트 케이스)
input.shift(); // input[0] 1(테스트 케이스) 제거
const info = input[0].split(" ").map((x) => +x); // [10, 8, 17]
input.shift(); // input[1] [10, 8, 17] 제거
let arr = []; // 빈 배열 선언
const result = 0; // 결과

for (let i = 0; i < info[2]; i++) {
  arr[i] = input[i].split(" ").map((x) => +x); // 입력값 배열로 변경
}

// for (let i = 0; i < info[0]; i++) {
//   for (let j = 0; j < info[1]; j++) {
//     arr.map((value) => {
//       if
//     });
//   }
// }

// [1,1] = [0,1], [1,0], [2,1], [1,2] 중 1이 있으면 자신을 제거하고 다음으로 넘어감.
// 만약 없다면 number += 1

// 미완성
