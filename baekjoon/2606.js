// 바이러스 (BFS 너비우선탐색 알고리즘)

let input = require("fs").readFileSync("example.txt").toString().split("\n");
//console.log(input)
const vertexNumber = Number(input[0]); // 컴퓨터의 수 : 7
const graph = {};

for (let i = 0; i < vertexNumber - 1; i++) {
  let [a, b] = input[i + 2].split(" ").map((v) => Number(v));
  if (graph[a] == undefined) {
    graph[a] = [b];
  } else {
    graph[a] = [...graph[a], b];
  }
}
for (let i = 0; i < vertexNumber - 1; i++) {
  let [b, a] = input[i + 2].split(" ").map((v) => Number(v));
  if (graph[a] == undefined) {
    graph[a] = [b];
  } else {
    graph[a] = [...graph[a], b];
  }
}

const BFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들
  let count = 0;

  needVisit.push(startNode); // 노드 탐색 시작값 (1) 삽입

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      count++;
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return count - 1;
};

console.log(BFS(graph, 1));
