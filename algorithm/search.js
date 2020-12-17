function linearSearch(data, value) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === value) {
      return i;
    }
  }
  return -1;
}

function binary_search(data, value) {
  let left = 0;
  let right = data.length - 1;
  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    if (data[mid] === value) {
      return mid;
    } else if (data[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const data = [1, 2, 3, 4, 666, 7, 8, 9, 10];
console.log(linearSearch(data, 99));
console.log(binary_search(data, 666));
