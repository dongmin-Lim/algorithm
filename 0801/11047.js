let input = require("fs").readFileSync("example.txt").toString().split("\n");

const num = Number(input[0].split(" ")[0]);
const price = Number(input[0].split(" ")[1]);
let rest = 0;

const result = (money) => {
  for (let i = num; i >= 1; i--) {
    if (price > input[i]) {
      console.log(parseInt(price / input[i]));
    }
  }
};

result(price);
