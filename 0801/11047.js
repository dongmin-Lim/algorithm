let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0].split(" ")[0]); // 10
let price = Number(input[0].split(" ")[1]); // 4200
let count = 0;

const result = () => {
  for (let i = num; i >= 1; i--) {
    let money_num = parseInt(price / input[i]); // 몫
    price = price % input[i]; // 나머지
    count += money_num;
  }
};

result();
console.log(count);
