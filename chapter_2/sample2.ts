// Copyright (c) 2018 ririko
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const age: number = parseInt(prompt("年齢を入力してください"));
if (age < 0) {
  alert("年齢には正の値を入力してください");
} else {
  if (age < 3) {
    console.log("無料");
  } else if (age < 7) {
    console.log("500円");
  } else if (age < 12) {
    console.log("1000円");
  } else if (age < 64) {
    console.log("2,000円");
  } else {
    console.log("無料");
  }
}
