// let input = require("fs").readFileSync("example.txt").toString().split("\n");
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0].split(" ")[0]); // 10
const price = Number(input[0].split(" ")[1]); // 4200
let rest;
let count = 0;

const result = (money) => {
  for (let i = num; i >= 1; i--) {
    if (money > input[i]) {
      let money_num = parseInt(money / input[i]); // 해당 단위로 나오는 갯수
      rest = money % input[i]; // 나머지
      count += money_num;
      result(rest);
    }
    if (rest == 0) break;
  }
};

result(price);
console.log(count);
