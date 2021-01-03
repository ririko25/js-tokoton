const {servicesVersion} = require('typescript');

const N = 8;
let count = 0;

function check(x, col) {
  var col_sort = col.reverse();
  for (let i = 0; i < col_sort.length; i++) {
    const row = col_sort[i];
    if (x + i + 1 === row || x - i - 1 === row) {
      return false;
    }
  }
  return true;
}

function search(col) {
  if (col.length === N) {
    console.log(col);
    count++;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (col.includes(i)) {
      continue;
    }
    if (check(i, col)) {
      col.push(i);
      search(col);
      col.pop();
    }
  }
}

search([]);

console.log(count);
