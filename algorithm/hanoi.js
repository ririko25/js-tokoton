function hanoi(n, src, dist, via) {
  if (n > 1) {
    hanoi(n - 1, src, via, dist);
    console.log(src + ' -> ' + dist);
    hanoi(n - 1, via, dist, src);
  } else {
    console.log(src + ' -> ' + dist);
  }
}

const n = 3;
hanoi(n, 'a', 'c', 'b');
