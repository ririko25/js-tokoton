// Copyright (c) 2018 ririko
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const monthStr = prompt("月の値を入力してください");
const month = parseInt(monthStr);
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("冬");
    break;
  case 3:
  case 4:
  case 5:
    console.log("春");
    break;
  case 6:
  case 7:
  case 8:
    console.log("夏");
    break;
  case 9:
  case 10:
  case 11:
    console.log("秋");
    break;
  default:
    console.log("1~12の数値を入力してください");
}
