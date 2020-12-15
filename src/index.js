"use strict";
exports.__esModule = true;
exports.add = void 0;
var bob = "hey";
console.log(bob);
var obj = {
    x: 33,
    y: "Abi"
};
var add = function (x, y) {
    return x + y;
};
exports.add = add;
console.log(obj);
console.log(exports.add(7, 8));
