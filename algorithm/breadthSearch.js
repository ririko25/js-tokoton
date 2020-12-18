const tree = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
  [11, 12],
  [13, 14],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

const data = [0];

while (data.length > 0) {
  const pos = data.shift();
  console.log(pos);
  for (const i of tree[pos]) {
    data.push(i);
  }
}
