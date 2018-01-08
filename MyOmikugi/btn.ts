// Copyright (c) 2018 ririko
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

(function() {
  "use strict";
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function() {
    const n = Math.random();
    if (n < 0.05) {
      this.textContent = "大吉"; // 5%
    } else if (n < 0.2) {
      this.textContent = "中吉"; //15%
    } else {
      this.textContent = "凶"; //80%
    }

    //     const results = ["大吉", "中吉", "凶", "末吉"];
    //     const n = Math.floor(Math.random() * results.length);
    // this.textContent = results[n];
  });
  btn.addEventListener("mousedown", function() {
    this.className = "pushed";
  });
  btn.addEventListener("mouseup", function() {
    this.className = "";
  });
})();
