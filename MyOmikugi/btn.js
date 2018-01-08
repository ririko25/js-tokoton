// Copyright (c) 2018 ririko
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
(function () {
    "use strict";
    const btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
        var n = Math.floor(Math.random() * 3);
        this.textContent = String(n);
    });
    btn.addEventListener("mousedown", function () {
        this.className = "pushed";
    });
    btn.addEventListener("mouseup", function () {
        this.className = "";
    });
})();
//# sourceMappingURL=btn.js.map