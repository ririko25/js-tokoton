// Copyright (c) 2018 ririko
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

//nには0~1までの数字を渡す
/**
 * おみくじけっかを返す
 * @param n 0-1の数字
 */
function omikuji(n: number): string {
  if (n < 0.05) {
    return "大吉"; // 5%
  } else if (n < 0.2) {
    return "中吉"; //15%
  } else {
    return "凶"; //80%
  }
  //     const results = ["大吉", "中吉", "凶", "末吉"];
  //     const n = Math.floor(Math.random() * results.length);
  // this.textContent = results[n];
}

(function() {
  "use strict";
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function() {
    const n = Math.random();
    this.textContent = omikuji(n);
  });
  btn.addEventListener("mousedown", function() {
    this.className = "pushed";
  });
  btn.addEventListener("mouseup", function() {
    this.className = "";
  });
})();
