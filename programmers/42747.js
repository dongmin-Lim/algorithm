// H-index

function solution(citations) {
  let answer = 0;
  const length = citations.length; // 5 (배열의 길이)

  for (let i = 1; i <= length; i++) {
    let result = citations.filter((value) => value >= i);
    console.log(`${i}번 이상 인용된 논문 : ${result}`);
    if (i <= result.length) {
      answer = i;
    }
  }
  return answer;
}

console.log(solution([3, 5, 8, 1, 2]));

// 어떤 연구자의 h 지수는 그 사람이 쓴 모든 논문 중 n회 이상 인용된 논문이 n개 이상일 때, 이 둘을 동시에 만족하는 n의 최대값으로 한다.
