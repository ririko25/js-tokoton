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

function search(pos) {
  for (const i of tree[pos]) {
    search(i);
  }
  console.log(pos);
}
search(0);
